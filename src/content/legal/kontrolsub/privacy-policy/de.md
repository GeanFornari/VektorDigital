# Datenschutzrichtlinie — Kontrol

**Version:** 1.0  
**Letzte Aktualisierung:** 19. März 2026  
**Entwickler:** Geancarlo Fornari  
**Kontakt:** contato@vektordigital.com.br

---

## 1. Einleitung

Der Schutz der Privatsphäre unserer Nutzer hat höchste Priorität. Diese Datenschutzrichtlinie beschreibt transparent, welche Daten die **Kontrol**-Anwendung erfasst, wie sie verwendet werden, mit wem sie geteilt werden und wie Sie Ihre Rechte ausüben können.

Diese Richtlinie entspricht der **Datenschutz-Grundverordnung (DSGVO — EU-Verordnung 2016/679)** und, soweit anwendbar, dem **Bundesdatenschutzgesetz (BDSG)** sowie weiteren anwendbaren Datenschutzgesetzen.

---

## 2. Erhobene Daten

### 2.1 Identifikations- und Authentifizierungsdaten

Bei der Erstellung Ihres Kontos in Kontrol werden folgende Daten von den verwendeten Authentifizierungsdiensten bereitgestellt:

| Datum | Quelle | Bedingung |
|---|---|---|
| Eindeutige UID (interner Firebase-Bezeichner) | Firebase Authentication | Immer (anonymes Konto) |
| E-Mail-Adresse | Google oder Apple | Nur wenn der Nutzer ein Konto verknüpft |
| Vollständiger Name | Google oder Apple | Nur wenn der Nutzer ein Konto verknüpft |

> **Hinweis zu Apple:** Sign In With Apple ermöglicht es Nutzern, ihre echte E-Mail-Adresse zu verbergen und stattdessen eine von Apple generierte Relay-Adresse zu verwenden. Kontrol akzeptiert und respektiert diese Einstellung.

### 2.2 Vom Nutzer eingegebene Finanzdaten

Bei der Registrierung von Abonnements werden folgende Daten in Cloud Firestore gespeichert, ausschließlich mit der UID des Nutzers verknüpft:

- Dienstname (z. B. „Netflix", „Spotify").
- Abonnementkategorie.
- Abrechnungsbetrag und Währung.
- Abrechnungszeitraum (monatlich, jährlich, wöchentlich).
- Abrechnungsdatum.
- Zahlungsart (Freitextfeld — **Nutzer dürfen keine vollständigen Kartennummern eingeben**).
- Dienst-URL zur Abonnementverwaltung.
- Persönliche Notizen zum Abonnement.
- Angabe des kostenlosen Testzeitraums (*Trial*) und Ablaufdatum.
- Aktivierungsstatus des Abonnements.

### 2.3 Zahlungshistorie

Kontrol erstellt und speichert automatisch eine **monatliche Ausgabenhistorie** in Firestore, berechnet auf Basis der registrierten Abonnements. Diese Daten werden verwendet, um dem Nutzer Ausgabenberichte anzuzeigen.

### 2.4 Lokale Einstellungen

Nutzerpräferenzdaten (wie Sprache und Status der Erstnutzung) werden **lokal auf dem Gerät** gespeichert, mithilfe von `SharedPreferences`. Diese Daten **werden nicht** an externe Server übertragen.

### 2.5 Automatisch durch Dritte erfasste Daten

Kontrol verwendet Drittanbieterdienste, die möglicherweise unabhängig Daten gemäß ihren eigenen Richtlinien erfassen:

| Dienst | Zweck | Datenschutzrichtlinie |
|---|---|---|
| **Google Firebase** | Authentifizierung, Datenbank (Firestore) | [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) |
| **Google Sign-In** | Anmeldung mit Google-Konto | [policies.google.com/privacy](https://policies.google.com/privacy) |
| **Sign In with Apple** | Anmeldung mit Apple-Konto | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| **RevenueCat** | Verwaltung von Abonnements und In-App-Käufen | [revenuecat.com/privacy](https://revenuecat.com/privacy) |

---

## 3. Verwendung der Daten

Die erhobenen Daten werden ausschließlich verwendet für:

1. **Authentifizierung:** Erstellen, Pflegen und Identifizieren des Nutzerkontos.
2. **Kernfunktionalität:** Anzeigen, Berechnen und Organisieren der registrierten Abonnements.
3. **Lokale Benachrichtigungen:** Planen und Senden von Erinnerungen zu auslaufenden *Trials* und künftigen Abrechnungen.
4. **Berichte:** Erstellen von Diagrammen und monatlicher Ausgabenhistorie.
5. **Planverwaltung:** Verarbeiten und Verifizieren von Premium-Abonnements innerhalb der App über RevenueCat.

**Kontrol verwendet Ihre Daten nicht für Werbezwecke, verkauft sie nicht und gibt sie nicht an Dritte weiter, außer an die in Abschnitt 2.5 aufgeführten Dienste.**

---

## 4. Benachrichtigungen

Die Anwendung bittet um Erlaubnis, **lokale Benachrichtigungen** an Ihr Gerät zu senden. Diese Benachrichtigungen werden ausschließlich auf Ihrem Gerät erstellt und angezeigt und **beinhalten keine Kommunikation mit externen Servern**. Sie können diese Erlaubnis jederzeit in den Einstellungen Ihres Betriebssystems widerrufen.

---

## 5. Speicherung und Sicherheit

Synchronisierte Daten werden in der Infrastruktur von **Google Firebase (Cloud Firestore)** gespeichert, das robuste Sicherheitsstandards einhält, einschließlich Verschlüsselung bei der Übertragung (TLS) und im Ruhezustand.

Die Daten sind so organisiert, dass **jeder Nutzer ausschließlich auf seine eigenen Daten zugreift**, sichergestellt durch Firestore-Sicherheitsregeln, die mit der Authentifizierungs-UID verknüpft sind.

Der Entwickler von Kontrol unternimmt angemessene Anstrengungen zum Schutz Ihrer Daten, aber kein Sicherheitssystem ist unfehlbar. Wir empfehlen, das Betriebssystem und die Anwendung stets aktuell zu halten.

---

## 6. Datenspeicherungsdauer

Daten werden gespeichert, solange der Nutzer ein aktives Konto in der Anwendung unterhält. Auf Anfrage zur Kontolöschung werden alle mit der UID des Nutzers verbundenen Daten innerhalb einer angemessenen Frist aus Cloud Firestore entfernt.

---

## 7. Nutzerrechte (DSGVO)

Gemäß der DSGVO und dem BDSG hat der Nutzer folgende Rechte:

| Recht | Beschreibung |
|---|---|
| **Auskunft** | Erfahren, ob Ihre Daten verarbeitet werden, und auf die gespeicherten Informationen zugreifen. |
| **Berichtigung** | Korrektur unvollständiger, unrichtiger oder veralteter Daten beantragen. |
| **Löschung** | Löschung Ihrer personenbezogenen Daten beantragen („Recht auf Vergessenwerden"). |
| **Datenübertragbarkeit** | Übertragung Ihrer Daten auf einen anderen Dienst beantragen. |
| **Widerruf der Einwilligung** | Einwilligung zur Datenverarbeitung jederzeit widerrufen. |
| **Widerspruch** | Der Verarbeitung von Daten ohne Ihre Einwilligung widersprechen. |
| **Einschränkung** | Einschränkung der Verarbeitung unter bestimmten Umständen beantragen. |

Zur Ausübung dieser Rechte wenden Sie sich bitte an: **contato@vektordigital.com.br**

Sie haben außerdem das Recht, eine Beschwerde bei der zuständigen **Datenschutzaufsichtsbehörde** einzureichen (z. B. dem Bundesbeauftragten für den Datenschutz und die Informationsfreiheit — BfDI).

---

## 8. Daten Minderjähriger

Kontrol **richtet sich nicht an Kinder unter 16 Jahren** (gemäß der deutschen DSGVO-Umsetzung; oder 13 Jahre in anderen Rechtsordnungen). Wir erfassen nicht absichtlich personenbezogene Daten von Kindern. Sollten wir erfahren, dass wir Daten eines Minderjährigen ohne Einwilligung der Erziehungsberechtigten erfasst haben, werden wir die erforderlichen Maßnahmen ergreifen, um diese Daten unverzüglich zu löschen.

---

## 9. Internationale Datenübermittlung

Daten werden auf Google-Servern (Firebase) gespeichert, die sich möglicherweise außerhalb des Europäischen Wirtschaftsraums (EWR) befinden. Google wendet international anerkannte Compliance-Mechanismen für solche Übermittlungen an, einschließlich der von der Europäischen Kommission genehmigten Standardvertragsklauseln.

---

## 10. Änderungen dieser Richtlinie

Der Entwickler behält sich das Recht vor, diese Richtlinie jederzeit zu aktualisieren. Benachrichtigungen über wesentliche Änderungen werden in der Anwendung bereitgestellt. Die weitere Nutzung nach Veröffentlichung der Änderungen gilt als Zustimmung zur neuen Version.

---

## 11. Kontakt und Datenschutzbeauftragter (DSB)

Bei Fragen, Anfragen oder Beschwerden im Zusammenhang mit dem Datenschutz wenden Sie sich bitte an:

**E-Mail:** contato@vektordigital.com.br 
**Verantwortlicher Entwickler:** Gean Fornari

Für diese Version ist kein Datenschutzbeauftragter (DSB) formell benannt. Bei Bedarf kann der Entwickler direkt unter der oben genannten E-Mail-Adresse kontaktiert werden.
