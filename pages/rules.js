import React from 'react'

const orderRules = () => {
	return (
		<div className='section container rules'>
			<h2 className='rules__title'>
				Всі ми люди, для того щоб нам було комфортно працювати і не виникало
				непорозумінь, прошу ознайомитися з нашими правилами
			</h2>
			<ul className='rules__list'>
				<li>
					1. Для початку дізнайтеся, чи вільна ваша дата. (Замовляти не пізніше
					ніж за тиждень до свята)
				</li>
				<li>
					2. Висловіть свої конкретні побажання щодо оформлення та начинки
					тортика. (Можна прислати зразок бажаного тортика, я не ксерокс, але
					постараюся максимально втілити ваші побажання)
				</li>
				<li>
					3. Замовлення опрацьовуємо тільки після передплати - 50% від вартості
					всього замовлення. (Я завжди стараюсь вирахувати необхідну замовлену
					вагу тортика, але до грама вирахувати не можливо, тому може
					допускатися +- 200 грамів)
				</li>
				<li>
					5. Прянички ручної роботи, топери, шоколадний декор, ягоди - весь цей
					декор оплачується окремо від ваги тортика. Ціна залежить від кількості
					цих декорацій, тому обговорюється при замовленні.
				</li>
				<li>
					4. Ми працюємо за графіком - з 9:00 - 18:00, отже, тортики плануйте
					забрати на протязі цього часу.
				</li>
			</ul>
			<h3>Дякую за розуміння!</h3>
		</div>
	)
}

export default orderRules
