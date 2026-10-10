const projects = {
    'retail-analysis': {
        title: 'Retail Business Analysis',
        category: 'Data Analytics',
        description: 'An interactive dashboard that summarizes retail sales, profit, orders, customers, and performance across products, categories, and regions.',
        technologies: 'Data Cleaning · Data Transformation · Exploratory Data · Analysis Business Analysis · Data Visualization · DAX · Power Query Power · BI Dashboard Developmen',
        image: 'images/retail.png',
        imageAlt: 'Retail Business Performance Dashboard with sales and profit charts',
        previewTitle: 'Dashboard image preview',
        previewCaption: 'A visual preview of the retail performance dashboard.',
        highlights: [
            'The Retail Business Analysis dashboard was created using Power BI to analyze sales performance, profitability, products, customers, and regional performance. The dashboard includes key performance indicators (KPIs), such as Total Sales, Total Profit, Profit Margin, Total Orders, and Total Customers, along with analysis by category, sub-category, product, customer, and region.',
            'Throughout this project, I worked on data cleaning, data modeling, creating calculated columns and DAX measures, designing meaningful KPIs, and developing interactive visualizations and dashboards. The analysis aims to generate actionable business insights that help understand business performance and support data-driven decision-making.'
        ]

    },

    'e-commerce-sales-analysis': {
        title: 'E-Commerce Sales Analysis',
        category: 'Data Analytics',
        description: 'An end-to-end SQL data analysis project that evaluates e-commerce sales, profitability, product performance, customer behavior, and regional trends using Excel and PostgreSQL.',
        technologies: 'Data Cleaning · Data Preparation · Database Setup · Exploratory Data · SQL Analysis · Data Visualization · Reporting',
        image: 'images/report 2.png',
        imageAlt: 'E-Commerce Sales Analysis Project Overview',
        previewTitle: 'Dashboard image preview',
        previewCaption: 'A visual preview of the e-commerce sales analysis project overview.',
        highlights: [
           'E-Commerce Data Analysis was developed using Excel, PostgreSQL, and SQL to analyze e-commerce transaction data in order to understand sales performance, product and category contributions, customer spending behavior, regional performance, payment methods, and profitability.',
           'This project encompasses exploratory analysis driven by SQL queries to extract key metrics such as Total Revenue, Total Orders, Average Order Value (AOV), Customer Lifetime Value (CLV), Repeat Purchase Rate, and Profit Margin, alongside customer segmentation and monthly sales trend analysis (MoM growth).',
           'In this project, I performed initial data cleaning and preprocessing in Microsoft Excel (handling missing values, removing duplicates, and data formatting), followed by table schema design (data modeling/DDL), table joins, metric aggregations, and advanced SQL querying using window functions and Common Table Expressions (CTEs) in PostgreSQL for trend and segmentation analysis. The analysis aims to transform raw transaction data into meaningful business insights to better understand customer behavior, identify growth opportunities, and support data-driven strategic decision-making.'
        ]
    },

    'kost-rental-data-analysis': {
        title: 'Kost Rental Data Analysis',
        category: 'Data Analytics',
        description: 'An exploratory data analysis project that evaluates Jabodetabek boarding house (kost) listings, rental price variations, and distribution across regions and types using Microsoft Excel.',
        technologies: 'Microsoft Excel · Data Cleaning · Pivot Tables · Excel Formulas · Exploratory Data Analysis (EDA) · Data Visualization · Reporting',
        image: 'images/report1.png',
        imageAlt: 'Kost rental data analysis preview',
        previewTitle: 'Kost rental analysis preview',
        previewCaption: 'A visual preview of the kost rental data analysis.',
        highlights: [
           'Jabodetabek Kost Rental Data Analysis was developed using Microsoft Excel to analyze boarding house (kost) listings in the Jabodetabek area in order to understand property distribution, rental price variations, and regional/type differences.',
           'This project encompasses Exploratory Data Analysis (EDA) to extract key metrics such as average rental prices, price ranges, room type distributions, and regional concentration.',
           'In this project, I performed data cleaning and formatting, descriptive statistical calculation, distribution and correlation analysis, Pivot Table creation, and data visualization in Excel. The analysis aims to transform raw rental data into meaningful insights to better understand the market dynamics of rental housing in Jabodetabek.'
        ]
    },

    'yolov8-rock-detection': {
        title: 'YOLOv8 Rock Type Detection',
        category: 'Data Science',
        description: 'An experimental data analysis evaluating how dataset scaling (50 to 500 samples) impacts YOLOv8 object detection performance, error rates, and real-time inference efficiency to find the optimal data threshold for rock classification.',
        technologies: 'Python · YOLOv8 · OpenCV · Roboflow · Deep Learning',
        image: 'images/projek1.jpg',
        imageAlt: 'YOLOv8 Rock Type Detection project preview',
        previewTitle: 'Project preview',
        previewCaption: 'Visual preview of the rock type detection project.',
        highlights: [
            'This research is a data-driven experimental study to analyze the impact of dataset scaling (50, 100, 200, 300, 400, and 500 images) on the performance, error rate, and real-time inference efficiency of the YOLOv8 object detection algorithm. The main focus of this study is not merely training an AI model, but conducting a structured, data-driven evaluation to discover the optimal dataset threshold that offers the best balance between detection accuracy and data processing efficiency.'
        ]
    },
    'hydroponic-classification': {
        title: 'Random Forest Hydroponic Classification',
        category: 'Machine Learning',
        description: 'This project builds a Random Forest-based machine learning application with a Tkinter GUI to automatically classify environmental suitability and provide hydroponic plant recommendations.',
        technologies: 'Python · Random Forest · Scikit-learn · Tkinter',
        image: 'images/projek2.png',
        imageAlt: 'Random Forest Hydroponic Classification project preview',
        previewTitle: 'Project preview',
        previewCaption: 'Visual preview of the hydroponic classification project.',
        highlights: [
            'This project focuses on building an end-to-end Machine Learning web/desktop application to evaluate and classify environmental conditions for hydroponic plant cultivation. By analyzing key environmental parameters—such as water temperature, water pH levels, and seasonal changes—the system determines whether a specific environment is optimal for hydroponics and automatically provides tailored plant recommendations (e.g., spinach, water spinach, mustard greens, and lettuce).',
            'To bridge the gap between complex data science models and end-users, the application features an interactive Graphical User Interface (GUI) built with Python’s Tkinter, allowing non-technical users such as local farmers or agricultural enthusiasts to leverage predictive insights effortlessly. '
        ]
    },
    'yolov5-pothole-detection': {
        title: 'YOLOv5 Pothole Detection',
        category: 'Vision AI',
        description: 'An object detection solution to identify potholes from road imagery using a YOLO-based detection model.',
        technologies: 'Python · YOLOv5 · Roboflow · Object Detection',
        image: 'images/projek3.jpeg',
        imageAlt: 'YOLOv5 Pothole Detection project preview',
        previewTitle: 'Project preview',
        previewCaption: 'Visual preview of the pothole detection project.',
        highlights: [
            'Annotated and prepared road image datasets.',
            'Built a detection pipeline for infrastructure monitoring use cases.',
            'Focused on model training and visual classification performance.'
        ]
    },
   
};

const projectId = new URLSearchParams(window.location.search).get('project');
const project = projectId && Object.prototype.hasOwnProperty.call(projects, projectId)
    ? projects[projectId]
    : null;
const content = document.querySelector('#project-detail-content');
const notFound = document.querySelector('#project-not-found');

if (!project) {
    notFound.hidden = false;
} else {
    document.title = `${project.title} | Robiatul Isnaini`;
    document.querySelector('#project-category').textContent = project.category;
    document.querySelector('#project-title').textContent = project.title;
    document.querySelector('#project-description').textContent = project.description;
    document.querySelector('#project-technologies').textContent = project.technologies;
    document.querySelector('#preview-title').textContent = project.previewTitle;
    document.querySelector('#preview-caption').textContent = project.previewCaption;

    const previewImage = document.querySelector('#preview-image');
    previewImage.src = project.image;
    previewImage.alt = project.imageAlt;

    const previewLink = document.querySelector('#preview-link');
    previewLink.href = project.image;

    const highlights = document.querySelector('#project-highlights');
    project.highlights.forEach((highlight) => {
        const item = document.createElement('li');
        item.textContent = highlight;
        highlights.append(item);
    });

    content.hidden = false;
}
