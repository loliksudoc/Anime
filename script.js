document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const episode = params.get("episode");

    const videoFrame = document.getElementById("video-frame");
    const episodeTitle = document.getElementById("episode-title");

    if (episode) {
        // Поменяем ID видео в зависимости от серии
        let videoUrl = "https://www.youtube.com/embed/";
        let videoId = ""; // ID видео для каждой серии (замените на реальный ID)

        switch (episode) {
            case '1':
                videoId = "ID_сериала_1"; // Видео для серии 1
                episodeTitle.textContent = "Серия 1: Пробуждение";
                break;
            case '2':
                videoId = "ID_сериала_2"; // Видео для серии 2
                episodeTitle.textContent = "Серия 2: Поединок";
                break;
            case '3':
                videoId = "ID_сериала_3"; // Видео для серии 3
                episodeTitle.textContent = "Серия 3: Сражение";
                break;
            // Добавьте другие эпизоды
            default:
                videoId = "ID_сериала_1"; // Стандартное видео
                episodeTitle.textContent = "Серия не найдена";
                break;
        }

        videoFrame.src = videoUrl + videoId;
    }
});
