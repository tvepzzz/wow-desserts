import Link from 'next/link'
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs'

const Footer = () => {
	return (
		<div className='footer__container container'>
			<div className='footer__logo'>
				<Link href='/'>
					<img src='/logo.png' alt='logo' className='nav__logo' />
				</Link>
				<p className='footer__name'>вАУ Десерт</p>
			</div>

			<div className='footer__nav'>
				<div>
					<h3 className='footer__title'>Соціальні мережі</h3>
					<ul className='footer__links'>
						<li>
							<a
								href='https://www.facebook.com/profile.php?id=100009519834672'
								className='footer__link'
								target='_blank'
							>
								<BsFacebook size={20} />
								Facebook
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/anastasiyaushenok2427/?hl=ru'
								className='footer__link'
								target='_blank'
							>
								<BsInstagram size={20} />
								Instagram
							</a>
						</li>
						<li>
							<a
								href='https://t.me/anastasiya_ushenok'
								className='footer__link'
								target='_blank'
							>
								<BsTelegram size={20} />
								Telegram
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='footer__title'>Навігація</h3>
					<ul className='footer__links'>
						<li>
							<Link href='/' className='footer__link'>
								Головна
							</Link>
						</li>
						<li>
							<Link href='/catalog' className='footer__link'>
								Каталог
							</Link>
						</li>
						<li>
							<Link href='/rules' className='footer__link'>
								Правила замовлення
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer
