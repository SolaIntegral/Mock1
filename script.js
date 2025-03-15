document.addEventListener("DOMContentLoaded", function () {
    let navContainer = document.getElementById("nav");
    if (navContainer) {
        fetch("nav.html")
            .then(response => response.text())
            .then(data => {
                navContainer.innerHTML = data;
            })
            .catch(error => console.error("ナビゲーションの読み込みに失敗:", error));
    }
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("スクリプトがロードされました");

    const reserveButton = document.getElementById("reserve-button");
    const reserveModal = document.getElementById("reserve-modal");
    const closeModal = document.getElementById("close-modal");
    const confirmReserve = document.getElementById("confirm-reserve");
    const venueSelect = document.getElementById("venue-select");
    const nextActionText = document.getElementById("next-action");

    console.log("reserveButton:", reserveButton);
    console.log("reserveModal:", reserveModal);
    console.log("closeModal:", closeModal);
    console.log("confirmReserve:", confirmReserve);

    if (!reserveButton || !reserveModal || !closeModal || !confirmReserve || !venueSelect) {
        console.error("一部の要素が取得できませんでした。");
        return;
    }

    // 予約ボタンを押した時にポップアップを開く
    reserveButton.addEventListener("click", function () {
        reserveModal.style.display = "block";
    });

    // キャンセルボタンでモーダルを閉じる
    closeModal.addEventListener("click", function () {
        reserveModal.style.display = "none";
    });

    // 予約を確定する
    confirmReserve.addEventListener("click", function () {
        const selectedVenue = venueSelect.value;

        if (confirm(`「${selectedVenue}」を予約しますか？`)) {
            alert("予約が完了しました！");
            reserveModal.style.display = "none";
            nextActionText.textContent = "予約が完了しました！";
        }
    });
});
