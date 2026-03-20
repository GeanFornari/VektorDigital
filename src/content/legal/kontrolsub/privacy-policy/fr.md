# Politique de Confidentialité — Kontrol

**Version :** 1.0  
**Dernière mise à jour :** 19 mars 2026  
**Développeur :** Geancarlo Fornari  
**Contact :** [EMAIL_ADDRESS]

---

## 1. Introduction

La confidentialité de nos utilisateurs est une priorité. Cette Politique de Confidentialité décrit, en toute transparence, les données que l'application **Kontrol** collecte, la manière dont elle les utilise, avec qui elle les partage et comment vous pouvez exercer vos droits.

Cette politique est conforme au **Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679)** et, dans la mesure applicable, à la **Loi Informatique et Libertés** (France) et aux autres législations applicables.

---

## 2. Données Collectées

### 2.1 Données d'Identification et d'Authentification

Lors de la création de votre compte dans Kontrol, les données suivantes sont fournies par les services d'authentification utilisés :

| Donnée | Source | Condition |
|---|---|---|
| UID unique (identifiant interne Firebase) | Firebase Authentication | Toujours (compte anonyme) |
| Adresse e-mail | Google ou Apple | Uniquement si l'utilisateur lie un compte |
| Nom complet | Google ou Apple | Uniquement si l'utilisateur lie un compte |

> **Remarque concernant Apple :** Sign In With Apple permet à l'utilisateur de masquer son adresse e-mail réelle en fournissant une adresse e-mail relais générée par Apple. Kontrol accepte et respecte cette préférence.

### 2.2 Données Financières Saisies par l'Utilisateur

Lors de l'enregistrement d'abonnements, les données suivantes sont stockées dans Cloud Firestore, associées exclusivement à l'UID de l'utilisateur :

- Nom du service (ex. : « Netflix », « Spotify »).
- Catégorie de l'abonnement.
- Montant et devise de facturation.
- Fréquence (mensuelle, annuelle, hebdomadaire).
- Date de facturation.
- Mode de paiement (champ de texte libre — **l'utilisateur ne doit pas saisir de numéros de carte complets**).
- URL du service pour la gestion de l'abonnement.
- Notes personnelles sur l'abonnement.
- Indication de la période d'essai gratuit (*trial*) et date d'expiration.
- Statut d'activation de l'abonnement.

### 2.3 Historique des Paiements

Kontrol génère et stocke automatiquement un **historique mensuel des dépenses** dans Firestore, calculé sur la base des abonnements enregistrés. Ces données permettent d'afficher des rapports de dépenses à l'utilisateur.

### 2.4 Préférences Locales

Les données de préférences de l'utilisateur (telles que la langue et l'état de première utilisation) sont stockées **localement sur l'appareil** à l'aide de `SharedPreferences`. Ces données **ne sont pas transmises** à des serveurs externes.

### 2.5 Données Collectées Automatiquement par des Tiers

Kontrol utilise des services tiers susceptibles de collecter des données de manière indépendante, conformément à leurs propres politiques :

| Service | Finalité | Politique de Confidentialité |
|---|---|---|
| **Google Firebase** | Authentification, base de données (Firestore) | [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) |
| **Google Sign-In** | Connexion avec un compte Google | [policies.google.com/privacy](https://policies.google.com/privacy) |
| **Sign In with Apple** | Connexion avec un compte Apple | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| **RevenueCat** | Gestion des abonnements et achats intégrés | [revenuecat.com/privacy](https://revenuecat.com/privacy) |

---

## 3. Utilisation des Données

Les données collectées sont utilisées exclusivement pour :

1. **Authentification :** Créer, maintenir et identifier le compte utilisateur.
2. **Fonctionnalité principale :** Afficher, calculer et organiser les abonnements enregistrés.
3. **Notifications locales :** Planifier et envoyer des rappels d'expiration de *trials* et de facturation futures.
4. **Rapports :** Générer des graphiques et un historique mensuel des dépenses.
5. **Gestion des plans :** Traiter et vérifier les abonnements premium au sein de l'Application via RevenueCat.

**Kontrol n'utilise pas vos données à des fins publicitaires, ne les vend pas et ne les partage pas avec des tiers au-delà des services listés à la Section 2.5.**

---

## 4. Notifications

L'Application demande l'autorisation d'envoyer des **notifications locales** à votre appareil. Ces notifications sont générées et affichées exclusivement sur votre appareil et **n'impliquent aucune communication avec des serveurs externes**. Vous pouvez révoquer cette autorisation à tout moment dans les paramètres de votre système d'exploitation.

---

## 5. Stockage et Sécurité

Les données synchronisées sont stockées dans l'infrastructure **Google Firebase (Cloud Firestore)**, qui adopte des normes de sécurité robustes, notamment le chiffrement en transit (TLS) et au repos.

Les données sont organisées de façon à ce que **chaque utilisateur accède exclusivement à ses propres données**, garanties par les Règles de Sécurité Firestore liées à l'UID d'authentification.

Le développeur de Kontrol déploie des efforts raisonnables pour protéger vos informations, mais aucun système de sécurité n'est infaillible. Nous recommandons de maintenir le système d'exploitation et l'Application toujours à jour.

---

## 6. Conservation des Données

Les données sont conservées tant que l'utilisateur maintient un compte actif dans l'Application. Lors de la demande de suppression du compte, toutes les données associées à l'UID de l'utilisateur seront supprimées de Cloud Firestore dans un délai raisonnable.

---

## 7. Droits de l'Utilisateur (RGPD)

Conformément au RGPD et à la Loi Informatique et Libertés, l'utilisateur dispose des droits suivants :

| Droit | Description |
|---|---|
| **Accès** | Savoir si vos données sont traitées et accéder aux informations stockées. |
| **Rectification** | Demander la correction de données incomplètes, inexactes ou obsolètes. |
| **Effacement** | Demander la suppression de vos données personnelles (« droit à l'oubli »). |
| **Portabilité** | Demander le transfert de vos données vers un autre service. |
| **Retrait du consentement** | Retirer le consentement au traitement des données à tout moment. |
| **Opposition** | S'opposer au traitement des données effectué sans votre consentement. |
| **Limitation** | Demander la limitation du traitement dans certaines circonstances. |

Pour exercer l'un de ces droits, contactez-nous à : **[adresse e-mail de support]**

Vous disposez également du droit de déposer une plainte auprès de la **CNIL** (Commission Nationale de l'Informatique et des Libertés) : [cnil.fr](https://www.cnil.fr).

---

## 8. Données des Mineurs

Kontrol **n'est pas destiné aux mineurs de moins de 15 ans** (conformément à la réglementation française ; ou 13 ans dans d'autres juridictions). Nous ne collectons pas intentionnellement de données personnelles d'enfants. Si nous apprenons que nous avons collecté des données d'un mineur sans le consentement de ses tuteurs, nous prendrons les mesures nécessaires pour supprimer ces informations immédiatement.

---

## 9. Transferts Internationaux de Données

Les données sont stockées sur des serveurs Google (Firebase) pouvant être situés en dehors de l'Espace Économique Européen (EEE). Google adopte des mécanismes de conformité reconnus internationalement pour ces transferts, notamment les Clauses Contractuelles Types approuvées par la Commission Européenne.

---

## 10. Modifications de cette Politique

Le développeur se réserve le droit de mettre à jour cette Politique à tout moment. Les notifications relatives aux modifications importantes seront disponibles dans l'Application. L'utilisation continue après la publication des modifications vaut acceptation de la nouvelle version.

---

## 11. Contact et Délégué à la Protection des Données (DPO)

Pour toute question, demande ou réclamation relative à la confidentialité et à la protection des données, veuillez nous contacter :

**E-mail :** [adresse e-mail de support]  
**Développeur Responsable :** Gean Fornari

Ce service ne dispose pas d'un Délégué à la Protection des Données (DPO) formellement désigné pour cette version. Si nécessaire, le développeur peut être contacté directement à l'adresse e-mail ci-dessus.
