
import B_Child from "./B_Child";

export default function A_Parent() {
    const count = 0;

    const clickMe = () => console.log("button is clicked");
    const clickedBy = (name) => console.log("clickedBy===>", name);
    const addCount = (item) => console.log("addCount", count + item);

    return (
        <div>
            <h3> Functional Props - Understanding </h3>

            <B_Child clickMe={clickMe} clickedBy={clickedBy} addCount={addCount} />
        </div>
    );
}
