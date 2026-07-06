import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: `Политика конфиденциальности приложения ${SITE.name}. Какие данные хранятся и как мы их защищаем.`,
};

const storedData = [
  "Email аккаунта (Firebase Auth)",
  "Профили питомцев: имя, порода, вес, пол, дата рождения",
  "Напоминания и записи журнала веса / медкарты",
  "Планы питания и пользовательские продукты",
  "Метаданные фотоотчётов прогулок (сами фото — только на устройстве)",
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Политика конфиденциальности"
      description="Мы бережно относимся к данным о ваших питомцах. Здесь — кратко и по делу, что хранится и где."
    >
      <LegalSection title="Общие положения">
        <p>
          Приложение «{SITE.name}» хранит данные о ваших питомцах и напоминаниях в Firebase
          Firestore. Фото прогулок хранятся локально на вашем устройстве. Доступ к облачным данным
          есть только у вашего аккаунта. Мы не передаём персональные данные третьим лицам.
        </p>
      </LegalSection>

      <LegalSection title="Какие данные хранятся">
        <ul className="list-disc space-y-2 pl-5">
          {storedData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="Где хранятся данные">
        <p>
          Облачные данные размещаются в инфраструктуре Google Firebase (Firestore и Authentication).
          Фото прогулок не загружаются в облако и остаются в локальном хранилище вашего телефона.
        </p>
      </LegalSection>

      <LegalSection title="Ваши права">
        <p>
          Вы можете в любой момент удалить аккаунт и все связанные облачные данные через настройки
          приложения. Подробная инструкция — на странице{" "}
          <Link href="/delete-account" className="font-medium text-accent hover:underline">
            удаления данных
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Контакты">
        <p>
          По вопросам конфиденциальности пишите на{" "}
          <a href={`mailto:${SITE.contactEmail}`} className="font-medium text-accent hover:underline">
            {SITE.contactEmail}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
