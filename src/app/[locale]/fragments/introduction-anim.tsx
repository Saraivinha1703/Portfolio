'use client';
import { TypeAnimation } from "react-type-animation";

export function NameTypeAnimation() {
    return (
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Carlos Neto',
          1000,
          'Carlos Alberto Saraiva Neto',
        ]}
        wrapper="span"
        speed={37}
        repeat={0}
      />
    )
}