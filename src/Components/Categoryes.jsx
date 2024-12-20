

const Categoryes = ({ onSelectCategory }) => {
  const categories = ["All Products", "Laptops", "Smartphones", "Accessories", "Smart Watches", "MacBook", "iPhone"];

  return (
    <div>

      <div className="flex flex-col p-7">


        {categories.map(category => (
          <button

            key={category}
            onClick={() => onSelectCategory(category)}
            className="block p-2 border border-secondary space-x-5 mb-3 rounded-lg text-secondary font-semibold hover:bg-primary-content hover:text-black hover:border-white hover:duration-500 ">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categoryes;
