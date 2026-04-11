# Privacy Policy — KontrolSub

**Version:** 1.0  
**Last updated:** April 11, 2026  
**Developer:** Vektor Digital  
**Contact:** contato@vektordigital.com.br
---

## 1. Introduction

The privacy of our users is a priority. This Privacy Policy transparently describes what data the **KontrolSub** application collects, how it uses it, with whom it shares it, and how you can exercise your rights.

This policy complies with the **General Data Protection Regulation (GDPR — EU Regulation 2016/679)** and, where applicable, the **California Consumer Privacy Act (CCPA)** and other applicable data protection laws.

---

## 2. Data Collected

### 2.1 Identification and Authentication Data

When you create your account in KontrolSub, the following data is provided by the authentication services used:

| Data | Source | Condition |
|---|---|---|
| Unique UID (internal Firebase identifier) | Firebase Authentication | Always (anonymous account) |
| Email address | Google or Apple | Only if the user links an account |
| Full name | Google or Apple | Only if the user links an account |

> **Note about Apple:** Sign In With Apple allows users to hide their real email by providing an Apple-generated relay address. KontrolSub accepts and respects this preference.

### 2.2 Financial Data Entered by the User

When registering subscriptions, the following data is stored in Cloud Firestore, exclusively associated with the user's UID:

- Service name (e.g., "Netflix", "Spotify").
- Subscription category.
- Billing amount and currency.
- Billing frequency (monthly, annual, weekly).
- Billing date.
- Payment method (free-text field — **users must not enter full card numbers**).
- Service URL for subscription management.
- Personal notes about the subscription.
- Indication of free trial period (*trial*) and expiration date.
- Subscription activation status.

### 2.3 Payment History

KontrolSub automatically generates and stores a **monthly expense history** in Firestore, calculated based on registered subscriptions. This data is used to display spending reports to the user.

### 2.4 Local Preferences

User preference data (such as language and first-time usage state) is stored **locally on the device** using `SharedPreferences`. This data **is not transmitted** to external servers.

### 2.5 Data Automatically Collected by Third Parties

KontrolSub uses third-party services that may independently collect data according to their own policies:

| Service | Purpose | Privacy Policy |
|---|---|---|
| **Google Firebase** | Authentication, database (Firestore) | [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) |
| **Google Sign-In** | Login with Google account | [policies.google.com/privacy](https://policies.google.com/privacy) |
| **Sign In with Apple** | Login with Apple account | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| **RevenueCat** | Subscription and in-app purchase management | [revenuecat.com/privacy](https://revenuecat.com/privacy) |

---

## 3. Use of Data

Collected data is used exclusively for:

1. **Authentication:** Creating, maintaining, and identifying the user account.
2. **Core functionality:** Displaying, calculating, and organizing registered subscriptions.
3. **Local notifications:** Scheduling and sending reminders for trial expirations and future billing.
4. **Reports:** Generating charts and monthly expense history.
5. **Plan management:** Processing and verifying premium subscriptions within the App via RevenueCat.

**KontrolSub does not use your data for advertising purposes, does not sell it, and does not share it with third parties beyond the services listed in Section 2.5.**

---

## 4. Notifications

The App requests permission to send **local notifications** to your device. These notifications are generated and displayed exclusively on your device and **do not involve communication with external servers**. You may revoke this permission at any time in your operating system settings.

---

## 5. Storage and Security

Synchronized data is stored on **Google Firebase (Cloud Firestore)** infrastructure, which adopts robust security standards, including encryption in transit (TLS) and at rest.

Data is organized so that **each user accesses exclusively their own data**, enforced by Firestore Security Rules linked to the authentication UID.

Vektor Digital employs reasonable efforts to protect your information, but no security system is infallible. We recommend keeping your operating system and the App always up to date.

---

## 6. Data Retention

Data is retained while the user maintains an active account in the App. Upon requesting account deletion, all data associated with the user's UID will be removed from Cloud Firestore within a reasonable timeframe.

---

## 7. User Rights (GDPR)

In accordance with the GDPR, users have the following rights:

| Right | Description |
|---|---|
| **Access** | Know if your data is being processed and access the stored information. |
| **Rectification** | Request correction of incomplete, inaccurate, or outdated data. |
| **Erasure** | Request the deletion of your personal data ("right to be forgotten"). |
| **Portability** | Request the transfer of your data to another service. |
| **Withdrawal of consent** | Withdraw consent for data processing at any time. |
| **Objection** | Object to the processing of data carried out without your consent. |
| **Restriction** | Request restriction of processing in certain circumstances. |

To exercise any of these rights, please contact us at: **contato@vektordigital.com.br**

---

## 8. Children's Data

KontrolSub **is not intended for children under 13 years of age** (or under 16 in EU member states where applicable). We do not intentionally collect personal data from children. If we become aware that we have collected data from a minor without parental consent, we will take the necessary steps to delete such information immediately.

---

## 9. International Data Transfers

Data is stored on Google (Firebase) servers that may be located outside your country of residence. Google adopts internationally recognized compliance mechanisms for such transfers, including Standard Contractual Clauses approved by the European Commission.

---

## 10. Changes to this Policy

Vektor Digital reserves the right to update this Policy at any time. Notifications about relevant changes will be made available within the App. Continued use after the publication of changes constitutes acceptance of the new version.

---

## 11. Contact and Data Protection Officer (DPO)

For questions, requests, or complaints related to privacy and data protection, please contact:

**Email:** contato@vektordigital.com.br  
**Responsible Developer:** Vektor Digital

This service does not have a formally designated Data Protection Officer (DPO) for this version. If required, the developer may be contacted directly at the email address above.
