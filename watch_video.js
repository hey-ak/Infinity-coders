const courses = {
    'HTML': [
        {
            title: "Pre Requisites",
            description: "Introductory tutorial on HTML.",
            videoId: "YOUR_HTML_VIDEO_ID_1",
            category: "beginner"
        },
        {
            title: "Introduction",
            description: "Introductory tutorial on HTML.",
            videoId: "YOUR_HTML_VIDEO_ID_2",
            category: "beginner"
        },
        // ... other HTML videos ...
    ],
    'CSS': [
        {
            title: "CSS Basics",
            description: "Introduction to CSS styling.",
            videoId: "YOUR_CSS_VIDEO_ID_1",
            category: "beginner"
        },
        {
            title: "Flexbox",
            description: "Diving into Flexbox layout.",
            videoId: "YOUR_CSS_VIDEO_ID_2",
            category: "advanced"
        },
        // ... other CSS videos ...
    ],
    'JavaScript': [
        {
            title: "JavaScript Introduction",
            description: "Kickstarting JS.",
            videoId: "YOUR_JS_VIDEO_ID_1",
            category: "beginner"
        },
        {
            title: "Async/Await",
            description: "Understanding asynchronous operations.",
            videoId: "YOUR_JS_VIDEO_ID_2",
            category: "advanced"
        },
        // ... other JavaScript videos ...
    ],
    'React': [
        {
            title: "React Basics",
            description: "Starting with React JS.",
            videoId: "YOUR_REACT_VIDEO_ID_1",
            category: "beginner"
        },
        {
            title: "Hooks",
            description: "Understanding React hooks.",
            videoId: "YOUR_REACT_VIDEO_ID_2",
            category: "advanced"
        },
        // ... other React videos ...
    ],
    'Bootstrap': [
        {
            title: "Bootstrap Introduction",
            description: "Introduction to the Bootstrap framework.",
            videoId: "YOUR_BOOTSTRAP_VIDEO_ID_1",
            category: "beginner"
        },
        {
            title: "Grid System",
            description: "Delving deep into Bootstrap's grid.",
            videoId: "YOUR_BOOTSTRAP_VIDEO_ID_2",
            category: "advanced"
        },
        // ... other Bootstrap videos ...
    ],
    'NodeJS': [
        {
            title: "NodeJS Basics",
            description: "Getting started with NodeJS.",
            videoId: "YOUR_NODEJS_VIDEO_ID_1",
            category: "beginner"
        },
        {
            title: "Express JS",
            description: "Introduction to the Express framework.",
            videoId: "YOUR_NODEJS_VIDEO_ID_2",
            category: "advanced"
        },
        // ... other NodeJS videos ...
    ]
};

function loadVideos(courseName) {
    const videoGrid = document.getElementById("video-grid");
    
    // Clear existing videos
    videoGrid.innerHTML = "";

    courses[courseName].forEach(video => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");
        videoItem.setAttribute("data-category", video.category);

        const videoTitle = document.createElement("p");
        videoTitle.textContent = video.title;

        const videoDescription = document.createElement("p");
        videoDescription.classList.add("video-description");
        videoDescription.textContent = video.description;

        const videoFrame = document.createElement("iframe");
        videoFrame.src = `https://www.youtube.com/embed/${video.videoId}`;
        videoFrame.setAttribute("allowfullscreen", "");

        const feedbackDiv = document.createElement("div");
        feedbackDiv.classList.add("feedback");
        feedbackDiv.innerHTML = `
            Was this video helpful? 
            <button class="thumbs-up">👍</button>
            <button class="thumbs-down">👎</button>
        `;

        videoItem.append(videoTitle, videoDescription, videoFrame, feedbackDiv);
        videoGrid.appendChild(videoItem);
    });

    // Update the breadcrumb
    const courseBreadcrumb = document.getElementById("course-breadcrumb");
    courseBreadcrumb.textContent = courseName;
}

document.addEventListener('DOMContentLoaded', function () {
    // Initial load of default course (HTML)
    loadVideos('HTML');

    const courseSelect = document.getElementById('course-category');
    courseSelect.addEventListener('change', function() {
        loadVideos(this.value);
    });

    // Filtering videos by category
    const videoCategorySelect = document.getElementById('video-category');
    videoCategorySelect.addEventListener('change', function() {
        let selectedCategory = this.value;
        const videoItems = document.querySelectorAll('.video-item');

        videoItems.forEach(video => {
            if (selectedCategory === 'all') {
                video.style.display = 'block';
            } else {
                video.getAttribute('data-category') === selectedCategory ? 
                    video.style.display = 'block' : video.style.display = 'none';
            }
        });
    });

    // Feedback mechanism
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('thumbs-up')) {
            alert('Thank you for the feedback!');
        } else if (event.target.classList.contains('thumbs-down')) {
            alert('Thank you for the feedback!');
        }
    });
});
