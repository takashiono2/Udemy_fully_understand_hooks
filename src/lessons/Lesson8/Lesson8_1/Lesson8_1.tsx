import { Suspense, useDeferredValue, useState } from "react";
import SearchResult from "./SearchResult";

const Lesson8_1 = () => {
  const [query, setQuery] = useState("");
  const defferdQuerry = useDeferredValue(query);

  return (
    <div>
      <label>
        アルバム検索
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`border-2 px-3 py-3 rounded-md`}
        />
        <Suspense fallback={<h2>Loading...</h2>}>
          <SearchResult query={defferdQuerry} />
        </Suspense>
      </label>
    </div>
  );
};

export default Lesson8_1;
