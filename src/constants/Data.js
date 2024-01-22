export const catagory = [
    { id: 1, catagory: "Home", emoji: "🏠" },
    { id: 2, catagory: "Work", emoji: "🏢" },
    { id: 3, catagory: "Personal", emoji: "👤" },
    { id: 4, catagory: "Health/Fitness", emoji: "💪" },
    { id: 5, catagory: "Education", emoji: "📚" },
    { id: 6, catagory: "Gym", emoji: "🏋️" },
  ];
export default function retunAllThemes() {
  return ([
    {
      name: "light",
      colors: [
        "neutral-100",
        "neutral-200",
        "neutral-300",
        "neutral-400",
        "neutral-500",
        "neutral-600",
        "neutral-700",
        "neutral-800",
        "neutral-900",
      ],
    },
    {
      name: "dark",
      colors: [
        "neutral-900",
        "neutral-800",
        "neutral-700",
        "neutral-600",
        "neutral-500",
        "neutral-400",
        "neutral-300",
        "neutral-200",
        "neutral-100",
      ],
    },
    {
      name: "purple",
      colors: [
        "purple-100",
        "purple-200",
        "purple-300",
        "purple-400",
        "purple-500",
        "purple-600",
        "purple-700",
        "purple-800",
        "purple-900",
      ],
    }]
  )
}
