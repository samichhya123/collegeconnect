import { useState, useRef, useEffect } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { colleges: "Kathford International College", path: "/-/kathford" },
    { colleges: "Prime College", path: "/-/prime" },
    { colleges: "St. Xavier's College", path: "/-/xaviers" },
    { colleges: "KMC College", path: "/-/kmc" },
    { colleges: "NCCS College", path: "/-/nccs" },
    { colleges: "Islington College", path: "/-/islington" },
    { colleges: "PadmaKanya Multiple Campus", path: "/-/padmakanya" },
    { colleges: "British College", path: "/-/british" },
    { colleges: "NCIT College", path: "/-/ncit" },
    { colleges: "Academia International College", path: "/-/academia" },
    { colleges: "Patan Multiple College", path: "/-/patan" },
    { colleges: "Ambition College", path: "/-/ambition" },
    { colleges: "Himalayan College of Engineering", path: "/-/himalaya" },
    { colleges: "Sagarmatha Engineering College", path: "/-/sagarmatha" },
    { colleges: "Quest International College", path: "/-/quest" },
    { colleges: "Campion College", path: "/-/campion" },
    { colleges: "Ritz College of Engineering and Management", path: "/-/ritz" },
    { colleges: "Lalitpur Engineering College", path: "/-/lalitpur" },
    { colleges: "Janakpur Engineering College", path: "/-/janakpur" },
    {
      colleges: "Najarjun College of Information Technology",
      path: "/-/najarjun",
    },
    { colleges: "Caribbean College", path: "/-/caribbean" },
    { colleges: "Kkwopa Engineering College", path: "/-/khwopa" },
    { colleges: "Vedas College", path: "/-/vedas" },
    { colleges: "Virinchi College", path: "/-/virinchi" },
    { colleges: "GoldenGate International College", path: "/-/goldengate" },
    { colleges: "Deerwalk Institute of Technology", path: "/-/deerwalk" },
    { colleges: "Herald College", path: "/-/herald" },
  ];

  const navigate = useNavigate();
  const rowRefs = useRef([]);

  const onChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setFilteredData(
      data.filter((item) =>
        item.colleges.toLowerCase().startsWith(query.toLowerCase())
      )
    );
    setCurrentIndex(-1);
  };

  const onSearch = (searchTerm) => {
    const college = data.find(
      (item) => item.colleges.toLowerCase() === searchTerm.toLowerCase()
    );
    if (college) {
      navigate(college.path);
    } else {
      console.log("College not found");
    }
  };

  const handleKeyDown = (e) => {
    if (filteredData.length === 0) return;

    if (e.key === "ArrowDown") {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, filteredData.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === "Enter" && currentIndex >= 0) {
      onSearch(filteredData[currentIndex].colleges);
    }
  };

  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < filteredData.length) {
      setSearchQuery(filteredData[currentIndex].colleges);
      rowRefs.current[currentIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [currentIndex, filteredData]);

  return (
    <div className="search-container">
      <div className="search-inner">
        <input
          type="text"
          placeholder="Search Colleges"
          value={searchQuery}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => onSearch(searchQuery)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        {searchQuery && filteredData.length > 0 && (
          <div className="drop-down show">
            {filteredData.map((college, index) => (
              <div
                ref={(el) => (rowRefs.current[index] = el)}
                onClick={() => onSearch(college.colleges)}
                className={`dropdown-row ${
                  currentIndex === index ? "selected" : ""
                }`}
                key={college.colleges}
              >
                {college.colleges}
              </div>
            ))}
          </div>
        )}
        {searchQuery && filteredData.length === 0 && (
          <div className="drop-down show">
            <p>No results found</p>
          </div>
        )}
      </div>
    </div>
  );
}
