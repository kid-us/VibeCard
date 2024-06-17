import { useEffect, useState } from "react";
import {
  SocialMediaContent,
  contactContents,
  socialMedias,
} from "../../../../services/contents";
import { useContentStore } from "../../../../store/useContentStore";
import ContentItems from "./ContentItems";

const Content = () => {
  const { socialMedia, updateSocialMedia, contact, updateContacts } =
    useContentStore();

  const [activeMedias, setActiveMedias] = useState([""]);
  const [contactsIcons, setContactsIcons] = useState([""]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (socialMedia.length > 0) {
      const icons = socialMedia.map((item) => item.icon);
      setActiveMedias(icons);
    }
    if (contactContents.length > 0) {
      const contacts = contact.map((contact) => contact.icon);
      setContactsIcons(contacts);
    }
  }, [socialMedia, contact]);

  // Social Medias
  const [socialMediaId, setSocialMediaId] = useState<number>(0);
  const [socialMediaLink, setSocialMediaLink] = useState("");

  // Contacts
  const [contactId, setContactId] = useState<number>(0);
  const [contactAddress, setContactAddress] = useState("");

  // Social Media
  const handleSocialUpdate = (socialInfo: SocialMediaContent) => {
    if (socialMediaLink !== "") {
      setSocialMediaId(0);
      const iconExists = socialMedia.some(
        (media) => media.icon == socialInfo.icon
      );

      if (iconExists) {
        updateSocialMedia(
          socialMedia.map((media) =>
            media.icon == socialInfo.icon
              ? { ...media, link: socialMediaLink }
              : media
          )
        );
      } else {
        updateSocialMedia([
          ...socialMedia,
          {
            link: socialMediaLink,
            color: socialInfo.color.replace("text", "bg").toString(),
            icon: socialInfo.icon,
          },
        ]);
      }
    } else {
      setError(true);
    }
  };

  function handleSocialDelete(iconToDelete: string) {
    const filtered = socialMedia.filter((media) => media.icon !== iconToDelete);
    const linkFilter = activeMedias.filter((media) => media !== iconToDelete);
    setActiveMedias(linkFilter);
    updateSocialMedia(filtered);
    setSocialMediaId(0);
    setError(false);
  }

  // Contact
  const handleContactUpdate = (socialInfo: SocialMediaContent) => {
    if (contactAddress !== "") {
      setContactId(0);
      const iconExists = contact.some((c) => c.icon == socialInfo.icon);

      if (iconExists) {
        updateContacts(
          contact.map((c) =>
            c.icon == socialInfo.icon ? { ...c, link: contactAddress } : c
          )
        );
      } else {
        updateContacts([
          ...contact,
          {
            link: contactAddress,
            color: socialInfo.color.replace("text", "bg").toString(),
            icon: socialInfo.icon,
          },
        ]);
      }
    } else {
      setError(true);
    }
  };

  function handleContactDelete(iconToDelete: string) {
    const filtered = socialMedia.filter((media) => media.icon !== iconToDelete);
    const contactFilter = activeMedias.filter(
      (media) => media !== iconToDelete
    );
    setContactsIcons(contactFilter);
    updateContacts(filtered);
    setContactId(0);
    setError(false);
  }

  return (
    <div>
      <p className="text-sm text-gray-300 mb-4">Contents</p>
      <div className="bg-white rounded p-2 mb-5">
        <p className="text-xs my-5">Contact</p>

        <ContentItems
          contents={contactContents}
          id={contactId}
          error={error}
          selectedContents={contactsIcons}
          deleteItem={(iconName: string) => handleContactDelete(iconName)}
          update={(content: SocialMediaContent) => handleContactUpdate(content)}
          setId={(value: number) => setContactId(value)}
          onError={(error: boolean) => setError(error)}
          onLink={(value: string) => setContactAddress(value)}
        />

        <p className="text-xs my-5">Social Media</p>

        <ContentItems
          contents={socialMedias}
          id={socialMediaId}
          error={error}
          selectedContents={activeMedias}
          deleteItem={(iconName: string) => handleSocialDelete(iconName)}
          update={(content: SocialMediaContent) => handleSocialUpdate(content)}
          setId={(value: number) => setSocialMediaId(value)}
          onError={(error: boolean) => setError(error)}
          onLink={(value: string) => setSocialMediaLink(value)}
        />
      </div>
    </div>
  );
};

export default Content;
