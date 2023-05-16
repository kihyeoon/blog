interface Props {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <nav className="ml-3">
      <h2 className="mb-2 border-b-2 border-blue-400 text-lg font-bold">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer hover:text-blue-500 hover:underline ${
              selected === category && "font-bold text-blue-500"
            }`}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}
