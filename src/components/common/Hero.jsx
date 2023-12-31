import styles from '../../style'
import Button from './Button'
import { showcase } from '../../constants'

const Hero = ({ index, swap, review, text, color, r, g, b }) => {
  const shouldSwap = swap; // Set your condition here to determine whether to swap or not
  const isReview = review

  return (
    <section className={`${styles.boxWidth} py-[20px] `}>
      <div className='flex flex-col lg:flex-row'>

        {/* Use a ternary operator to conditionally swap the divs */}
        {shouldSwap ? (
          <>
            {/* SHOWCASE IMAGE */}
            <div className={`mt-[20px] pt-[10px] max-w-[500px] ${isReview ? "hidden" : ""}`}>
              <img
                src={showcase[index].image}
                alt="image"
                width={1700}
                height="auto"
              />
            </div>

            {/* SHOWCASE CONTENT */}
            <div className={`${styles.flexStart} flex-col ${shouldSwap ? "pl-[80px]" : "pr-[80px]"}`}>
              <h1 className={`${styles.heading1} mb-[10px] `}>
                {showcase[index].title}
              </h1>
              <p className={`${styles.paragraph1} pt-[10px] pb-[25px] text-black/60 `}>
                {showcase[index].description}
              </p>

              {/* SHOWCASE BUTTON */}
              <div className=''>
                <Button
                  text={text}
                  color={color}
                  r={r}
                  g={g}
                  b={b}
                />
              </div>
            </div>
          </>
        ) : (
          // If shouldSwap is false, render the divs in the original order
          <>
            {/* SHOWCASE CONTENT */}
            <div className={`${styles.flexStart} flex-col max-w-[550px] ${shouldSwap ? "pl-[80px]" : "pr-[80px]"}`}>
              <h1 className={`${styles.heading1} mb-[10px] `}>
                {showcase[index].title}
              </h1>
              <p className={`${styles.paragraph1} pt-[10px] pb-[25px] text-black/60 `}>
                {showcase[index].description}
              </p>

              {/* SHOWCASE BUTTON */}
              <div className=''>
                <Button
                    text={text}
                    color={color}
                    r={r}
                    g={g}
                    b={b}
                  />
              </div>
            </div>

            {/* SHOWCASE IMAGE */}
            <div className={`mt-[20px] pt-[10px] max-w-[500px] ${isReview ? "hidden" : ""}`}>
              <img
                src={showcase[index].image}
                alt="image"
                width={1700}
                height="auto"
              />
            </div>
          </>
        )}

      </div>
    </section>
  )
}

export default Hero
