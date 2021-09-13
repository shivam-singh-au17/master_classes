
export function ListItems(props) {
    console.log(props);
    return (
      <div>
        <p>
          my name is {props.name} and my age is {props.age}
        </p>
        <button>Click</button>
      </div>
    );
}