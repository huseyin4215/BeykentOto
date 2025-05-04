// Tüm nav-icon öğelerini seçelim
const icons = document.querySelectorAll(".nav-links .nav-icon");
// 'fa-bars' ve 'fa-xmark' öğelerini seçelim
const bar = document.getElementById("nav-icon-link-x");
const X = document.getElementById("nav-icon-link-bar");


// İleri geçiş fonksiyonu
const nextbar = () => {
    const activeSlide = document.querySelector(".nav-links .nav-bar-active");
    activeSlide.classList.remove("nav-bar-active");
    
    icons[0].classList.add("nav-bar-active"); // İlk simgeye dön
 
    
};

// Geri geçiş fonksiyonu
const prevX = () => {
    const activeSlide = document.querySelector(".nav-links .nav-bar-active");
    activeSlide.classList.remove("nav-bar-active");
    icons[icons.length - 1].classList.add("nav-bar-active"); // Son simgeye dön
  
};

const headerH =() =>{
    const header = document.querySelector("header"); // header'ı doğru şekilde seçiyoruz
    const navBar = document.getElementById("nav-container");
    const navHeight = navBar.offsetHeight; // nav-container'ın yüksekliğini alıyoruz
    header.style.paddingTop = `calc(${navHeight}px + 7rem)`; // header padding-top değerini ayarlıyoruz
}



// İleri butonuna tıklama olayını dinleyelim
bar.addEventListener("click", (e) => {
    e.preventDefault();
    nextbar();
  
});

// Geri butonuna tıklama olayını dinleyelim
X.addEventListener("click", (e) => {
    e.preventDefault();
    prevX();
    
});


//dropcontent

// Tüm öğeleri seçmek için querySelectorAll kullanıyoruz
const navDropLinks = document.querySelectorAll(".nav-drop");
const navDropContents = document.querySelectorAll(".nav-item .nav-i-links");
const navItemsUp = document.querySelectorAll(".nav-i-up");
const navItemsDown = document.querySelectorAll(".nav-i-down");

// Her öğeye tıklama olayını ekleyelim
navDropLinks.forEach((navDropLink, index) => {
    navDropLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.innerWidth >= 992) return; // Pc çalışmasın
        // İlgili içeriği ve simgeleri seçiyoruz
        const navDropContent = navDropContents[index];
        const navItemUp = navItemsUp[index];
        const navItemDown = navItemsDown[index];

        // Görünürlüğü değiştir
        if (navDropContent.style.display === "block") {
            navDropContent.style.display = "none";
            navItemUp.style.opacity = 0;
            navItemDown.style.opacity = 1;
        } else {
            navDropContent.style.display = "block";
            navItemDown.style.opacity = 0;
            navItemUp.style.opacity = 1;
        }

        
    });
});

// Hover durumunu kontrol eden fonksiyon
const toggleHover = (index, isHovering) => {
    const navDropContent = navDropContents[index];
    const navItemUp = navItemsUp[index];
    const navItemDown = navItemsDown[index];

    if (isHovering) {
        navDropLinks[index].style.color="#0F5CBF";
        navItemDown.style.opacity = 0;
        navItemUp.style.opacity = 1;
        navDropContent.style.display = "block"; // Görünür hale getir
    } else {
        // Diğer hover durumunu kontrol et
        if (navDropContents[index].style.display === "block") {
            navItemUp.style.opacity = 0;
            navItemDown.style.opacity = 1;
            navDropContent.style.display = "none"; // Gizle
             navDropLinks[index].style.color = ""; // Ana menü link rengini eski haline getir
        }
       
    }
};

// Her öğeye hover olaylarını ekle
navDropLinks.forEach((navDropLink, index) => {
    let isHoveringLink = false; // NavDropLink üzerinde hover durumu
    let isHoveringContent = false; // NavDropContent üzerinde hover durumu

    navDropLink.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        if (window.innerWidth <= 992) return; // Mobilde çalışmasın
        isHoveringLink = true; // Link üzerinde hover etkin
        toggleHover(index, true); // Hover etkin
    });

    navDropLink.addEventListener("mouseleave", (e) => {
        e.preventDefault();
        if (window.innerWidth <= 992) return; // Mobilde çalışmasın
        isHoveringLink = false; // Link üzerinde hover kaldır
        // Her iki durum da false ise hover kaldır
        if (!isHoveringContent) {
            toggleHover(index, false);
        }
    });

    navDropContents[index].addEventListener("mouseenter", (e) => {
        e.preventDefault();
        if (window.innerWidth <= 992) return; // Mobilde çalışmasın
        isHoveringContent = true; // İçerik üzerinde hover etkin
        toggleHover(index, true); // Hover etkin
    });

    navDropContents[index].addEventListener("mouseleave", (e) => {
        e.preventDefault();
        if (window.innerWidth <= 992) return; // Mobilde çalışmasın
        isHoveringContent = false; // İçerik üzerinde hover kaldır
        // Her iki durum da false ise hover kaldır
        if (!isHoveringLink) {
            toggleHover(index, false);
        }
    });
});



const updateNavDisplay = () => {
    // Ekran genişliği kontrolü
    if (window.innerWidth >= 992) {
        // Masaüstü görünümde tüm içerikleri görünür yap
        navDropContents.forEach((navDropContent) => {
            navDropContent.style.display = "block"; // veya "none" isteğe bağlı
        });

        // İkonların durumunu sıfırla
        navItemsUp.forEach((navItemUp) => {
            navItemUp.style.opacity = 0;
        });
        navItemsDown.forEach((navItemDown) => {
            navItemDown.style.opacity = 1;
        });
    } else {
        // Mobil görünümde açma/kapatma
        navDropContents.forEach((navDropContent) => {
            navDropContent.style.display = "none"; // Başlangıçta gizle
        });
    }
};
// Sayfa yüklendiğinde ve pencere boyutu değiştiğinde görünürlüğü güncelle
window.addEventListener("resize", updateNavDisplay);
document.addEventListener("DOMContentLoaded", updateNavDisplay);