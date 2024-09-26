const blogContainer = document.getElementById("blog-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumber = document.getElementById("pageNumber");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

const blogDetail = document.getElementById("blog-detail");
const blogDetailContent = document.getElementById("blog-detail-content");
const closeDetail = document.getElementById("closeDetail");

let currentPage = 1;
const articlesPerPage = 12; // 3 articles per row, 4 rows per page
const totalPages = 3; //  3 pages of blogs
let filteredBlogs = [];

// Updated blog data with titles and content
const blogs = [
  {
    title: "Choosing the Right College in Nepal",
    content:
      "Navigating through the choices of colleges in Nepal can be overwhelming. This guide helps you make an informed decision based on courses, facilities, and career prospects.",
    image: "image1.jpg",
  },
  {
    title: "Top Engineering Colleges in Kathmandu",
    content:
      "Explore the best engineering colleges in Kathmandu that offer quality education and exceptional placement opportunities.",
    image: "image2.jpg",
  },
  {
    title: "How to Prepare for College Entrance Exams",
    content:
      "Preparing for entrance exams can be challenging. Here are some tips and tricks to ace your exams and secure a seat in your dream college.",
    image: "image3.jpg",
  },
  {
    title: "Scholarship Opportunities for Students",
    content:
      "Looking for financial aid? This blog highlights scholarship programs available for students in Nepal and how to apply.",
    image: "image4.jpg",
  },
  {
    title: "Studying Abroad: Is it Worth It?",
    content:
      "Many Nepali students dream of studying abroad, but is it worth it? Find out the pros and cons in this insightful blog.",
    image: "image5.jpg",
  },
  {
    title: "How to Choose the Right Career Path",
    content:
      "Choosing a career can be difficult. This blog helps you align your passion with a profession to build a successful career.",
    image: "image6.jpg",
  },
  {
    title: "The Impact of Technology on Education",
    content:
      "Discover how technology is revolutionizing the education system in Nepal, with new trends like e-learning and online classes.",
    image: "image7.jpg",
  },
  {
    title: "Best Colleges for Medical Studies in Nepal",
    content:
      "Find out which colleges in Nepal offer the best programs for aspiring doctors, along with details about their curriculum and facilities.",
    image: "image8.jpg",
  },
  {
    title: "Life as a Student in Kathmandu",
    content:
      "Living in Kathmandu as a student has its perks and challenges. Here’s what you can expect while studying in Nepal’s capital city.",
    image: "image9.jpg",
  },
  {
    title: "Internship Opportunities for Nepali Students",
    content:
      "Internships provide hands-on experience that is crucial for future employment. Learn about top internship opportunities for Nepali students.",
    image: "image10.jpg",
  },
  {
    title: "How to Balance Studies and Extracurricular Activities",
    content:
      "Balancing academics with extracurriculars can be tough. Here are some strategies to help you excel in both areas.",
    image: "image11.jpg",
  },
  {
    title: "Top 10 Trending Courses in 2024",
    content:
      "Stay ahead of the curve with this list of trending courses that will dominate in 2024 and offer great career opportunities.",
    image: "image12.jpg",
  },
  {
    title: "Is Online Education the Future?",
    content:
      "The pandemic has shifted education online. But is this the future of education? We explore the possibilities.",
    image: "image13.jpg",
  },
  {
    title: "The Role of Extracurricular Activities in College Admissions",
    content:
      "Colleges today look beyond academics. Learn how your extracurriculars can play a vital role in securing college admissions.",
    image: "image14.jpg",
  },
  {
    title: "Understanding College Accreditation in Nepal",
    content:
      "Accreditation plays a crucial role in the quality and credibility of education. Learn how to check if a college is properly accredited.",
    image: "image15.jpg",
  },
  {
    title: "What to Expect During Your First Year of College",
    content:
      "Your first year of college can be exciting yet overwhelming. This blog walks you through what you should expect.",
    image: "image16.jpg",
  },
  {
    title: "How to Make Friends in College",
    content:
      "Making friends in college can seem daunting. Here are some tips on how to build meaningful friendships in a new environment.",
    image: "image17.jpg",
  },
  {
    title: "Choosing the Right Course After High School",
    content:
      "Confused about which course to pursue after high school? This blog helps you make an informed decision based on your interests.",
    image: "image18.jpg",
  },
  {
    title: "The Importance of Soft Skills in College",
    content:
      "Soft skills are just as important as technical skills. Learn how to develop and improve your communication, teamwork, and leadership abilities.",
    image: "image19.jpg",
  },
  {
    title: "Extracurricular Activities That Boost Your College Application",
    content:
      "Boost your college application by engaging in meaningful extracurricular activities that showcase your talents and interests.",
    image: "image20.jpg",
  },
  {
    title: "How to Manage College Stress",
    content:
      "College can be stressful, but it doesn’t have to be overwhelming. Learn how to manage stress with these effective strategies.",
    image: "image21.jpg",
  },
  {
    title: "Why Internships Are Important for College Students",
    content:
      "Internships offer real-world experience and can open doors to future job opportunities. Here's why internships are vital for college students.",
    image: "image22.jpg",
  },
  {
    title: "The Best Part-Time Jobs for College Students",
    content:
      "Looking for a part-time job while studying? Check out this list of flexible jobs that are perfect for college students.",
    image: "image23.jpg",
  },
  {
    title: "How to Write a Standout College Application Essay",
    content:
      "Your college application essay can make or break your application. Learn how to write a compelling essay that sets you apart.",
    image: "image24.jpg",
  },
  {
    title: "How to Ace Your College Interview",
    content:
      "Get ready for your college interview with these expert tips, from understanding common questions to making a great first impression.",
    image: "image25.jpg",
  },
  {
    title: "Best Study Habits for College Students",
    content:
      "Success in college is all about effective study habits. Discover techniques to stay focused, organized, and prepared for exams.",
    image: "image26.jpg",
  },
  {
    title: "Exploring Career Options After Graduation",
    content:
      "Wondering what to do after college? Here’s a guide to exploring different career paths and choosing the one that fits your passion.",
    image: "image27.jpg",
  },
  {
    title: "How to Build a Strong College Resume",
    content:
      "Your college resume is more than just a list of grades. Learn how to showcase your skills, experience, and achievements effectively.",
    image: "image28.jpg",
  },
  {
    title: "College Dorm Life: What to Expect and How to Prepare",
    content:
      "Moving into a dorm can be a big change. Find out what to expect from dorm life and how to make the transition as smooth as possible.",
    image: "image29.jpg",
  },
  {
    title: "Gap Year Benefits: Should You Take One?",
    content:
      "Taking a gap year before college is becoming popular. Find out the benefits and potential downsides to make an informed decision.",
    image: "image30.jpg",
  },

  {
    title: "Balancing Academics and Social Life in College",
    content:
      "Maintaining a balance between academics and social life is essential. Learn how to manage your time effectively for both.",
    image: "image31.jpg",
  },
  {
    title: "Effective Note-Taking Techniques for College Students",
    content:
      "Note-taking is an essential skill in college. Learn different techniques to organize your notes for maximum efficiency and retention.",
    image: "image32.jpg",
  },
  {
    title: "Best Time Management Apps for College Students",
    content:
      "Struggling with time management in college? Explore the best apps designed to help you stay organized and productive.",
    image: "image33.jpg",
  },
  {
    title: "How to Overcome Procrastination in College",
    content:
      "Procrastination can derail your college success. Here’s how to develop better habits and get things done on time.",
    image: "image34.jpg",
  },
  {
    title: "How to Build Strong Relationships with Professors",
    content:
      "Building rapport with professors can enhance your college experience. Learn how to communicate effectively and create meaningful connections.",
    image: "image35.jpg",
  },
  {
    title: "How to Prepare for College Midterms and Finals",
    content:
      "Exams can be stressful, but preparation is key. Discover effective study strategies to ace your college midterms and finals.",
    image: "image36.jpg",
  },
];

// Load all blogs initially
filteredBlogs = blogs;

// Function to load the blogs on the current page
function loadBlogs(page) {
  blogContainer.innerHTML = "";

  const start = (page - 1) * articlesPerPage;
  const end = page * articlesPerPage;
  const blogsToShow = filteredBlogs.slice(start, end);

  blogsToShow.forEach((blog, index) => {
    const article = document.createElement("div");
    article.classList.add("article");
    article.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}">
      <h2>${blog.title}</h2>
      <p>${blog.content.substring(0, 100)}...</p> <!-- Show only a snippet -->
    `;
    article.addEventListener("click", () => showBlogDetail(index));
    blogContainer.appendChild(article);
  });

  pageNumber.textContent = page;
}

// Function to show blog detail
function showBlogDetail(index) {
  const blog = filteredBlogs[index];
  blogDetailContent.innerHTML = `
    <img src="${blog.image}" alt="${blog.title}">
    <h2>${blog.title}</h2>
    <p>${blog.content}</p>
  `;
  blogDetail.style.display = "block";
}

// Function to close blog detail
closeDetail.addEventListener("click", () => {
  blogDetail.style.display = "none";
});

// Pagination controls
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    loadBlogs(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    loadBlogs(currentPage);
  }
});

// Search functionality (for typing search)
searchBar.addEventListener("input", function () {
  searchBlogs();
});

// Search functionality (for search button)
searchBtn.addEventListener("click", function () {
  searchBlogs();
});

// Function to perform the blog search
function searchBlogs() {
  const query = searchBar.value.toLowerCase();

  // Filter blogs based on the search query
  filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(query) ||
      blog.content.toLowerCase().includes(query)
  );

  // Reset pagination to page 1 when a new search is made
  currentPage = 1;
  loadBlogs(currentPage);
}

// Initial load
loadBlogs(currentPage);
