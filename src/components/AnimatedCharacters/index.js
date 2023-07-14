
import './index.scss'

const AnimatedCharacters = ({ characterClass, characterArray, index }) => {
  return (
    <span>
      {characterArray.map((char, i) => (
        <span key={char + i} className={`${characterClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedCharacters;