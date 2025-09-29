import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      {/* Button variations */}
      <div className="space-y-4">
        <h2 className="font-semibold">Button Sizes</h2>
        <div className="flex gap-4">
          <Button title="Small" styles="text-sm px-2 py-1 rounded-md" />
          <Button title="Medium" styles="text-base px-4 py-2 rounded-md" />
          <Button title="Large" styles="text-lg px-6 py-3 rounded-md" />
        </div>

        <h2 className="font-semibold mt-4">Button Shapes</h2>
        <h2 className="font-semibold mt-4">Button Shapes</h2>
            <div className="flex gap-4 flex-wrap">
            <Button title="Rounded-sm" styles="px-4 py-2 rounded-sm" />
            <Button title="Rounded-md" styles="px-4 py-2 rounded-md" />
            <Button title="Rounded-lg" styles="px-4 py-2 rounded-lg" />
            <Button title="Rounded-full" styles="px-4 py-2 rounded-full" />
            </div>
      </div>
    </div>
  )
}

export default Landing
