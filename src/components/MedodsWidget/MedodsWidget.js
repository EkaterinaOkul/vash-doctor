import { useEffect } from "react";

const MedodsWidget = () => {
  useEffect(() => {
    (function (m, w, i, d, g, e, t) {
      m["MEDODSWidgetObject"] = g;
      m[g] =
        m[g] ||
        function () {
          (m[g].q = m[g].q || []).push(Array.from(arguments));
        };
      e = w.createElement(i);
      t = w.getElementsByTagName(i)[0];
      e.async = 1;
      e.src = "https://online-vash-doctor.medods.ru/scripts/embeddable_script.js"; // URL твоего виджета

      e.onload = () => {
        console.log("Medods script loaded"); // Проверяем загрузку в консоли

        if (window.mv) {
          window.mv("updateConfiguration", {
            showRecordingButton: true,
            origin: "https://online-vash-doctor.medods.ru",
            recordingButtonMessage: "Запись онлайн",
            recordingButtonColor: "#1D76FE", // Изменение цвета кнопки
            recordingButtonTextColor: "#ffffff", // Белый цвет текста
          });
        } else {
          console.error("Medods script not loaded properly");
        }
      };

      t.parentNode.insertBefore(e, t);
    })(window, document, "script", "https://online-vash-doctor.medods.ru/scripts/embeddable_script.js", "mv");
  }, []);

  return null; // Виджет просто загружается, UI не нужен
};

export default MedodsWidget;
