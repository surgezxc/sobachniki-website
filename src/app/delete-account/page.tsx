import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Удаление аккаунта и данных",
  description: `Как удалить аккаунт и все данные в приложении ${SITE.name}.`,
};

const deletedCloudData = [
  "Все профили питомцев",
  "Напоминания и задачи",
  "Записи журнала веса",
  "Медкарта: вакцинации, визиты, процедуры",
  "Планы питания и пользовательские продукты",
  "Метаданные фотоотчётов прогулок",
];

const steps = [
  "Откройте приложение «Собачники»",
  "Перейдите в раздел «Профиль»",
  "Выберите «Конфиденциальность»",
  "Нажмите «Удалить аккаунт и все данные»",
  "Подтвердите удаление",
];

export default function DeleteAccountPage() {
  return (
    <LegalLayout
      title="Удаление аккаунта и данных"
      description="Вы полностью контролируете свои данные. Удаление аккаунта необратимо — убедитесь, что сохранили всё нужное."
    >
      <LegalSection title="Как удалить аккаунт">
        <ol className="list-decimal space-y-2 pl-5">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </LegalSection>

      <LegalSection title="Что будет удалено">
        <p>После подтверждения безвозвратно удаляются все облачные данные вашего аккаунта:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {deletedCloudData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="Фото прогулок">
        <p>
          Фотографии прогулок хранятся только на вашем устройстве. Они удаляются вместе с
          приложением при его деинсталляции. Облачной копии фото мы не храним.
        </p>
      </LegalSection>

      <LegalSection title="Нужна помощь?">
        <p>
          Если что-то пошло не так или остались вопросы — напишите на{" "}
          <a href={`mailto:${SITE.contactEmail}`} className="font-medium text-accent hover:underline">
            {SITE.contactEmail}
          </a>
          . Также ознакомьтесь с{" "}
          <Link href="/privacy" className="font-medium text-accent hover:underline">
            политикой конфиденциальности
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
