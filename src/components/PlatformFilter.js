import { useDispatch, useSelector } from "react-redux";
import { setPlatform } from "../features/platforms/platformSlice";

function PlatformFilter() {
  const dispatch = useDispatch();

  const selectedPlatform = useSelector(
    (state) => state.platforms.selectedPlatform
  );

  return (
    <div className="card">
      <h2>🔍 Filter Posts</h2>

      <select
        value={selectedPlatform}
        onChange={(e) => dispatch(setPlatform(e.target.value))}
      >
        <option>All</option>
        <option>LinkedIn</option>
        <option>Instagram</option>
        <option>Twitter</option>
        <option>Facebook</option>
      </select>
    </div>
  );
}

export default PlatformFilter;