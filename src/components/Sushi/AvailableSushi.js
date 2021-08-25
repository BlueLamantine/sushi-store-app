import Card from '../UI/Card';
import SushiItem from './SushiItem';
const SUSHI = [
  {
    id: 's1',
    name: 'Rolls',
    desc: 'A Philadelphia roll is made with smoked salmon, cream cheese, and cucumber.',
    price: 10.99,
  },
  {
    id: 's2',
    name: 'Ramen',
    desc: 'A Japanese noodle soup.',
    price: 9.99,
  },
  {
    id: 's3',
    name: 'Sashimi',
    desc: 'Specialty of Japanese cuisine, fresh fish served raw.',
    price: 20.0,
  },
];

const AvailableSushi = () => {
  return (
    <section className="container text-center">
      <Card>
        <ul className="flex flex-col items-baseline">
          {SUSHI.map(el => (
            <SushiItem
              key={el.id}
              name={el.name}
              desc={el.desc}
              price={el.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableSushi;
