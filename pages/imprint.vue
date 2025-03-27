<template>
  <div
    class="flex h-screen flex-col items-center overflow-y-auto bg-blue-1-light px-24 py-16 text-xl leading-relaxed dark:bg-blue-1-dark"
  >
    <h1 class="text-3xl font-semibold">Impressum</h1>
    <div class="my-8">
      <p>
        <b
          >Informationen und Offenlegung gemäß &sect;5 (1) ECG, &sect; 25
          MedienG, &sect; 63 GewO und &sect; 14 UGB</b
        >
      </p>
      <p><b>Webseitenbetreiber:</b> Marco Janderka</p>
      <p><b>Anschrift:</b> Hochmayrstraße 44, 2384 Breitenfurt bei Wien</p>
      <p>
        <b>Kontaktdaten:</b> <br />
        Telefon: +43 664 3975756 <br />
        Email: marco.janderka@htl.rennweg.at
      </p>
      <p>
        <b>Anwendbare Rechtsvorschrift: </b>
        <NuxtLink
          to="https://www.ris.bka.gv.at/"
          target="_blank"
          class="underline decoration-solid underline-offset-4"
          >www.ris.bka.gv.at </NuxtLink
        ><br />
      </p>
      <p>
        <b>Online Streitbeilegung:</b> Verbraucher haben die Möglichkeit,
        Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:
        <NuxtLink
          to="http://ec.europa.eu/odr/"
          target="_blank"
          class="underline decoration-solid underline-offset-4"
          >http://ec.europa.eu/odr</NuxtLink
        >. Sie können allfällige Beschwerde auch an die oben angegebene
        E-Mail-Adresse richten.
      </p>
      <p>
        <b>Urheberrecht:</b> Die Inhalte dieser Webseite unterliegen, soweit
        dies rechtlich möglich ist, diversen Schutzrechten (z.B dem
        Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem
        Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher
        Zustimmung des Webseitenbetreibers.
      </p>
      <p>
        <b>Haftungsausschluss:</b> Trotz sorgfältiger inhaltlicher Kontrolle
        übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die
        Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind
        ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf
        ausgehende Links aufmerksam werden, welche auf eine Webseite mit
        rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um
        dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu
        entfernen.<br />Die Urheberrechte Dritter werden vom Betreiber dieser
        Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen
        werden wir den betroffenen Inhalt umgehend entfernen.
      </p>
      <p>
        Quelle:
        <NuxtLink
          to="https://www.ortner-rechtsanwalt.at/strafrecht-festnahme-verhaftung/"
          target="_blank"
          class="underline decoration-solid underline-offset-4"
          >Rechtsanwalt Wien Festnahme</NuxtLink
        >
      </p>
      <p>
        Schriftarten von
        <NuxtLink
          to="https://fonts.google.com/"
          target="_blank"
          class="underline decoration-solid underline-offset-4"
          >Google Fonts</NuxtLink
        >.<br />
        Icons von
        <NuxtLink
          to="https://iconify.design/"
          target="_blank"
          class="underline decoration-solid underline-offset-4"
          >iconify</NuxtLink
        >.<br />
        Bilder von
        <NuxtLink
          to="https://unsplash.com/"
          target="_blank"
          class="underline decoration-solid underline-offset-4"
          >unsplash</NuxtLink
        >,
        <NuxtLink
          to="https://pixabay.com/"
          target="_blank"
          class="underline decoration-solid underline-offset-4"
          >pixabay</NuxtLink
        >.
      </p>
    </div>
    <NuxtLink
      to="/"
      class="shadow-content-box-drop-shadow flex h-16 w-56 items-center justify-center rounded-2xl bg-blue-5-light p-1 font-heading text-2xl font-semibold dark:bg-blue-5-dark"
    >
      Back</NuxtLink
    >
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    definePageMeta({
      layout: false,
    });
  },
};
</script>
