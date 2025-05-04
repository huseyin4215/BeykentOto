
// Form gönderim işlemi
document.getElementById('dealerApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini durdur

    const nameInput = document.getElementById('name').value;
    const companyNameInput = document.getElementById('companyName').value;
    const phoneInput = document.getElementById('phone').value;
    const addressInput = document.getElementById('address').value;
  

    // Telefon numarası formatını kontrol et (5XX XXX XX XX)
    const phonePattern = /^\d{3} \d{3} \d{2} \d{2}$/;
    const phoneValid = phonePattern.test(phoneInput);



        // Mailto linkini oluştur
        const mailtoLink = `mailto:info@beykentservisotolastik.com.tr?subject=B2B Bayilik Başvurusu &body=\Şirket Adı: ${companyNameInput}%0D%0A\Ad ve Soyad: ${nameInput}%0D%0A\Telefon: ${phoneInput}%0D%0A\Adres: ${addressInput}`;

    
        // Mailto bağlantısını aç
        window.location.href = mailtoLink;
    
        return false; // Formun gönderimini durdur
    
    
});

// Telefon girişi için otomatik formatlama
document.getElementById('phone').addEventListener('input', function(event) {
    let input = event.target.value.replace(/\D/g, ''); // Sadece rakamları al

    if (input.length > 10) {
        input = input.substring(0, 10); // 10 haneden fazlasını alma
    }

    // Giriş biçimi: 5XX XXX XX XX
    if (input.length > 3) {
        input = input.slice(0, 3) + ' ' + input.slice(3); // 3. karakterden sonra boşluk ekle
    }
    if (input.length > 7) {
        input = input.slice(0, 7) + ' ' + input.slice(7); // 6. karakterden sonra boşluk ekle
    }
    if (input.length > 10) {
        input = input.slice(0, 10) + ' ' + input.slice(10); // 9. karakterden sonra boşluk ekle
    }

    event.target.value = input; // Güncellenmiş değeri geri yaz
});

