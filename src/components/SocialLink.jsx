import { socialLinks } from '../data';

const SocialLink = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map(({ id, href, icon }) => {
        return (
          <li key={id}>
            <a
              href={href}
              target='_blank'
              rel='noreferrer'
              className={itemClass}
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLink;
