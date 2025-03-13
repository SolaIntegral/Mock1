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
    // 運動量に応じたおすすめ情報
    const exerciseSelect = document.getElementById("exercise-level");
    const recommendationText = document.getElementById("recommendation");

    if (exerciseSelect) {
        exerciseSelect.addEventListener("change", function () {
            const level = exerciseSelect.value;
            if (level === "low") {
                recommendationText.textContent = "ウォーキングを毎日20分始めてみましょう！";
            } else if (level === "normal") {
                recommendationText.textContent = "運動を継続しながら、定期的な健康診断を受けましょう！";
            } else if (level === "high") {
                recommendationText.textContent = "運動量は素晴らしいです！適切な栄養補給も忘れずに。";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const useCouponButton = document.getElementById("use-coupon");
    const couponContainer = document.getElementById("coupon-container");

    if (useCouponButton) {
        useCouponButton.addEventListener("click", function () {
            if (confirm("このクーポンを使用しますか？")) {
                couponContainer.innerHTML = "<p>✅ クーポン使用済み</p>";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert-points");
    const stepsDisplay = document.getElementById("steps");
    const convertedPointsDisplay = document.getElementById("converted-points");

    if (convertButton) {
        convertButton.addEventListener("click", function () {
            let steps = parseInt(stepsDisplay.textContent);
            let points = Math.floor(steps / 100);
            stepsDisplay.textContent = "0 歩"; // 変換後、歩数リセット
            convertedPointsDisplay.textContent = `変換後のポイント: ${points} pt`;
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const visitButtons = document.querySelectorAll(".visit-button");

    visitButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (confirm(`${this.dataset.place} に到着しましたか？`)) {
                this.textContent = `✅ ${this.dataset.place} (訪問済み)`;
                this.disabled = true;
            }
        });
    });
});
