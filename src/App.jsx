import Icon from './icons.jsx'
import useToast from './useToast.js'
import { profile } from './data.js'
import photo from './assets/photo.jpg'

export default function App() {
  const toast = useToast()

  // Le lien fonctionne normalement (tel:, mailto:) ;
  // on copie en plus la valeur dans le presse-papiers et on affiche une notification,
  // utile sur ordinateur où aucune application d'appel ou de mail n'est parfois installée.
  const notify = (text, message) => () => {
    try {
      navigator.clipboard?.writeText(text)
    } catch {
      /* ignore */
    }
    toast.show(message)
  }

  const callMsg = `Appel vers ${profile.phone.display}`
  const mailMsg = `Message vers ${profile.email.display}`

  return (
    <div className="wrap">
      <header className="hero">
        <div className="brand">{profile.brand}</div>
        <img
          className="photo"
          alt={`${profile.firstName} ${profile.lastName}`}
          src={photo}
        />
      </header>

      <main>
        <section className="card">
          <h1>{profile.lastName}</h1>
          <p className="first">{profile.firstName}</p>
          <div className="bar" />
          <p className="role">{profile.role}</p>
          <span className="badge">{profile.badge}</span>

          <div className="list">
            <a
              className="item"
              href={profile.phone.href}
              onClick={notify(profile.phone.display, callMsg)}
            >
              <Icon name="phone" />
              <span>
                <div className="lb">Téléphone</div>
                <div className="vl">{profile.phone.display}</div>
              </span>
            </a>

            <a
              className="item"
              href={profile.email.href}
              onClick={notify(profile.email.display, mailMsg)}
            >
              <Icon name="mail" />
              <span>
                <div className="lb">E-mail</div>
                <div className="vl">{profile.email.display}</div>
              </span>
            </a>

            <a
              className="item"
              href={profile.address.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="pin" />
              <span>
                <div className="lb">Adresse</div>
                <div className="vl">{profile.address.display}</div>
              </span>
            </a>
          </div>

          <div className="btns">
            <a
              className="btn b1"
              href={profile.phone.href}
              onClick={notify(profile.phone.display, callMsg)}
            >
              📞 Appeler
            </a>
            <a
              className="btn b2"
              href={profile.email.hrefWithBody}
              onClick={notify(profile.email.display, mailMsg)}
            >
              ✉️ Écrire
            </a>
          </div>
        </section>
      </main>

      <footer>
        © <b>{profile.brand}</b> · {profile.footer}
      </footer>

      <div id="toast" className={toast.visible ? 'on' : ''} role="status">
        {toast.message}
      </div>
    </div>
  )
}
