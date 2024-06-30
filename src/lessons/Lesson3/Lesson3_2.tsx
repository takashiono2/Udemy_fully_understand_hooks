import { RefObject, useRef } from "react";

const Lesson3_2 = () => {
  // const [ref, setRef] = useState();
  const listRef: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null);
  const scrollToIndex = (index: number) => {
    console.log(listRef.current);
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll('li > img')[index];
    console.log(imgNode);

    imgNode?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  };

  return (
    <div>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Cat1</button>
        <button onClick={() => scrollToIndex(1)}>Cat2</button>
        <button onClick={() => scrollToIndex(2)}>Cat3</button>
      </nav>
      <div style={{ overflowX: "auto", maxWidth: "700px", margin: "auto" }}>
        <ul ref={listRef}
          className="flex items-center justify-between"
          style={{ minWidth: "1300px" }} // コンテナより大きいサイズを指定
        >
          <li>
            <img src="https://placekitten.com/g/200/200" alt="Cat 1" />
          </li>
          <li>
            <img src="https://placekitten.com/g/300/200" alt="Cat 2" />
          </li>
          <li>
            <img src="https://placekitten.com/g/250/200" alt="Cat 3" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Lesson3_2;
