import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import './AdmitCard.css';

const EntranceExamForm = () => {
  const [admitCardData, setAdmitCardData] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  useEffect(() => {
    const fetchAdmitCardData = async () => {
      try {
        const response = await axios.get('/api/admit-card');
        setAdmitCardData(response.data);
        setPhotoPreview(response.data.profile_image_path);
      } catch (error) {
        console.error('Error fetching admit card data:', error);
      }
    };

    fetchAdmitCardData();
  }, []);

  const resetForm = () => {
    setAdmitCardData(null);
    setPhotoPreview(null);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Set fonts and colors
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0); // Black text color
  
    // Title with background color
    doc.setFillColor(0, 123, 255); // Blue background for title
    doc.rect(0, 0, 210, 30, 'F'); // Background for title
    doc.setFontSize(24);
    doc.setTextColor(255, 255, 255); // White text for title
    doc.text('Admit Card', 20, 20);
  
    // Add profile image if available
    if (photoPreview) {
      doc.addImage(photoPreview, 'JPEG', 20, 35, 50, 50); // Adjust width and height as needed
    }
  
    // Styling the sections with padding, background, and headings
    const marginLeft = 80;
    const lineHeight = 12;
    const sectionMargin = 20; // Space between sections
    let yPosition = 35 + 50 + sectionMargin;
  
    const fields = [
      { label: 'Name:', value: admitCardData.full_name },
      { label: 'Email:', value: admitCardData.email },
      { label: 'Contact:', value: admitCardData.contact_number },
      { label: 'College:', value: admitCardData.college_name },
      { label: 'Program:', value: admitCardData.program_name },
      { label: 'Exam Date:', value: admitCardData.examDate || 'Not available' },
      { label: 'Time Slot:', value: admitCardData.timeSlot || 'Not available' },
    ];
  
    // Section Header styling
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 123, 255); // Blue for section headers
  
    doc.text('Admit Card Details', marginLeft, yPosition);
    yPosition += 10;
  
    // Add Admit Card Information with structured spacing
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0); // Black text for details
  
    fields.forEach((field, index) => {
      // Add a subtle background color for each section of data
      doc.setFillColor(index % 2 === 0 ? 240 : 255, 255, 255); // Alternating row background colors
      doc.rect(marginLeft - 5, yPosition - 5, 130, lineHeight + 5, 'F'); // Background for each row
  
      // Heading for each data field
      doc.setFont('helvetica', 'bold');
      doc.text(field.label, marginLeft, yPosition);
  
      // Data value in normal font
      doc.setFont('helvetica', 'normal');
      doc.text(field.value, marginLeft + 60, yPosition);
  
      yPosition += lineHeight + 5; // Adjust for spacing between rows
    });
  
    // Divider line after the admit card details section
    doc.setDrawColor(0, 0, 0); // Black divider line
    doc.setLineWidth(0.5);
    doc.line(70, yPosition, 200, yPosition); // Horizontal line
    yPosition += 10;
  
    // Footer section with date and additional information
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Grey footer text
    doc.text('Generated on: ' + new Date().toLocaleDateString(), 70, yPosition);
  
    // Save the PDF as a Blob (for sending via email)
    const pdfBlob = doc.output('blob');
  
    // Send the generated PDF via email
    sendEmail(pdfBlob);
  };
  
  
  
  const sendEmail = async (pdfBlob) => {
    const formData = new FormData();
    formData.append('to', 'sejarhang12@gmail.com');
    formData.append('subject', 'Your Admit Card');
    formData.append('body', 'Please find your admit card attached.');
    
    // Create a Blob file from the PDF and append it to formData
    const pdfFile = new File([pdfBlob], 'admit_card.pdf', { type: 'application/pdf' });
    formData.append('attachment', pdfFile);
  
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  

  return (
    <div className="Admission-section">
      {admitCardData ? (
        <div className="admit-card" id="admitCard">
          <h2>Admit Card</h2>
          <div className="profile-image" style={{ backgroundImage: `url(${photoPreview})` }} />
          <p><strong>Name:</strong> {admitCardData.full_name}</p>
          <p><strong>Email:</strong> {admitCardData.email}</p>
          <p><strong>Contact:</strong> {admitCardData.contact_number}</p>
          <p><strong>College:</strong> {admitCardData.college_name}</p>
          <p><strong>Program:</strong> {admitCardData.program_name}</p>
          <p><strong>Exam Date:</strong> {admitCardData.examDate || 'Not available'}</p>
          <p><strong>Time Slot:</strong> {admitCardData.timeSlot || 'Not available'}</p>
          <button onClick={generatePDF} className="btn">Download PDF & Send Email</button>
          <button onClick={resetForm} className="btn">Reset</button>
        </div>
      ) : (
        <p>Loading admit card data...</p>
      )}
    </div>
  );
};

export default EntranceExamForm;
