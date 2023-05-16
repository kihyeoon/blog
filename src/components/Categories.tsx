interface Props {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <nav className=" ml-3">
      <h2 className="font-bold underline">Category</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className="cursor-pointer hover:underline"
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}
