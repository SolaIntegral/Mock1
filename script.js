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
    const reserveButton = document.getElementById("reserve-button");
    const reserveModal = document.getElementById("reserve-modal");
    const closeModal = document.getElementById("close-modal");
    const confirmReserve = document.getElementById("confirm-reserve");
    const venueSelect = document.getElementById("venue-select");
    const nextActionText = document.getElementById("next-action");
    const ticketModal = document.getElementById("ticket-modal");
    const closeTicketModal = document.getElementById("close-ticket-modal");
    const buyTicket = document.getElementById("buy-ticket");
    const paymentModal = document.getElementById("payment-modal");
    const closePaymentModal = document.getElementById("close-payment-modal");
    const confirmPayment = document.getElementById("confirm-payment");

    let step = 1; // 現在のステップ

    // 予約ボタンを押した時にポップアップを開く（最初のアクション）
    reserveButton.addEventListener("click", function () {
        if (step === 1) {
            reserveModal.style.display = "block";
        } else if (step === 2) {
            nextActionText.textContent = "健診結果は確認しましたか？";
            reserveButton.textContent = "確認しました";
            step++;
        } else if (step === 3) {
            ticketModal.style.display = "block";
        }
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
            nextActionText.textContent = "健康診断に行きましたか？";
            reserveButton.textContent = "行きました";
            step++; // ステップを進める
        }
    });

    // チケットモーダルのキャンセル
    closeTicketModal.addEventListener("click", function () {
        ticketModal.style.display = "none";
    });

    // 「購入」ボタンを押すと支払いモーダルを開く
    buyTicket.addEventListener("click", function () {
        ticketModal.style.display = "none";
        paymentModal.style.display = "block";
    });

    // 支払いモーダルのキャンセル
    closePaymentModal.addEventListener("click", function () {
        paymentModal.style.display = "none";
    });

    // 支払い完了
    confirmPayment.addEventListener("click", function () {
        alert("購入が完了しました！");
        paymentModal.style.display = "none";
    });
});
