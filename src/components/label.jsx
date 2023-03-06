const labelColorMap = {
  Workshop: 'bg-pink-1',
  'Tech Talk': 'bg-blue-1',
  Activity: 'bg-orange-1'
};

export default function Label(props) {
  const { text } = props;
  const color = labelColorMap[text];
  return <span className={`inline-block mr-1 ${color} py-1 px-3 `}>{text}</span>;
}
