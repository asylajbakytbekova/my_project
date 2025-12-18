const cityData = {
  tokyo: {
    sights: ["Токио тау • Сибуя • Асакуса храмдары"],
    hotels: ["Park Hyatt Tokyo", "The Ritz-Carlton Tokyo", "Shinjuku Granbell Hotel"]
  },
  delhi: {
    sights: ["Қызыл сарай • Лотус храм • Индия қақпасы"],
    hotels: ["The Leela Palace", "ITC Maurya", "Taj Palace Hotel"]
  },
  berlin: {
    sights: ["Бранденбург қақпасы • Музей аралы • Рейхстаг"],
    hotels: ["Hotel Adlon Kempinski", "Berlin Marriott Hotel", "NH Collection Berlin"]
  },
  newyork: {
    sights: ["Статуя Свободы • Таймс-сквер • Central Park"],
    hotels: ["The Plaza", "Mandarin Oriental", "The St. Regis"]
  },
  rio: {
    sights: ["Христос құдай мүсіні • Копакабана • Ипанема"],
    hotels: ["Copacabana Palace", "Belmond Hotel", "Hotel Fasano Rio"]
  }
};

const cityCards = document.querySelectorAll(".city-card");
const cityInfo = document.getElementById("city-info");

cityCards.forEach(card => {
  card.addEventListener("click", () => {
    const cityKey = card.dataset.city;
    const data = cityData[cityKey];

    if (data) {
      cityInfo.style.display = "block";
      cityInfo.innerHTML = `
        <h3>${card.querySelector(".caption").textContent}</h3>
        <h4>Көрікті жерлер:</h4>
        <ul>${data.sights.map(s => `<li>${s}</li>`).join("")}</ul>
        <h4>Үздік қонақ үйлер:</h4>
        <ul>${data.hotels.map(h => `<li>${h}</li>`).join("")}</ul>
      `;
      cityInfo.scrollIntoView({behavior: "smooth"});
    }
  });
});
