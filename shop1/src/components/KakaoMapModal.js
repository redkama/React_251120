import { useEffect } from "react";
import "./KakaoMapModal.css";

const KakaoMapModal = ({ store, onClose }) => {
  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      console.error("Kakao Map SDK not loaded");
      return;
    }

    // 🔥 autoload=false 이기 때문에 반드시 필요
    window.kakao.maps.load(() => {
      const container = document.getElementById("kakao-map");
      if (!container) return;

      const map = new window.kakao.maps.Map(container, {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 임시
        level: 3,
      });

      // ✅ services는 load 안에서만 안전
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(store.add, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(
            result[0].y,
            result[0].x
          );

          map.setCenter(coords);

          new window.kakao.maps.Marker({
            map,
            position: coords,
          });
        }
      });
    });
  }, [store]);

  return (
    <div className="map-modal-backdrop">
      <div className="map-modal">
        <div className="map-header">
          <strong>{store.name}</strong>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="map-body">
          <div id="kakao-map" />
        </div>

        <div className="map-footer">
          <p>{store.add}</p>
          <p>{store.call}</p>
        </div>
      </div>
    </div>
  );
};

export default KakaoMapModal;
