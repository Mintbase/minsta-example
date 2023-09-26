# Minsta

This repository hosts the primary codebase for the [Minsta App](https://minsta.me), originally created and developed by [@microchipgnu](https://github.com/microchipgnu). 

All new Minsta instances should be derived from this repository.

## Demo

Check out the live demo here: [minsta demo](https://minsta-app.vercel.app/).

## One-Click Deploy

Deploy this project using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMintbase%2Fminsta)

## Getting Started

To start with this project:

1. Clone the repository.
2. If you don't have `pnpm` installed, run:

   ```bash
   npm install -g pnpm
   ```
   
3. Then, install the required dependencies:

     ```bash
     pnpm install
     ```

## Environment Variables

Refer to the **.env.example** file for the environment variables used in this project. 

If you don't set up a `.env` file or environment variables with your provider, the project will retrieve values from the following files:

1. For CSS generation during build: `generate-css.js`
2. For configuration variables: `src/constants.ts`
3. For fallback metadata and text values: `src/fallback.ts`

## Paste into Vercel
Can copy and paste this right into Vercel's env fields

```
#SETUP
NEXT_PUBLIC_MINTING_CLOSED="false"
NEXT_PUBLIC_BASE_URL="https://testnet.mintbase.xyz"
NEXT_PUBLIC_WALLET_ADDRESS="https://testnet.wallet.mintbase.xyz"
NEXT_PUBLIC_TOKEN="minsta.mintspace2.testnet"
NEXT_PUBLIC_CONTRACT="1.minsta.mintbus.testnet"
NEXT_PUBLIC_NETWORK="testnet"
NEXT_PUBLIC_APP_TITLE="Minsta Mintbase"

# META
NEXT_PUBLIC_META_DESCRIPTION="Share your best moments with Mintbase and Minsta!"
NEXT_PUBLIC_META_TITLE="Mint moments on Mintbase"
NEXT_PUBLIC_TWITTER="Explore%20unforgettable%20moments%20at%20%2Mintbase%20%40Mintbase%20%40NEARProtocol%20%23BOS%20%23NEAR"
NEXT_PUBLIC_META_IMAGE="./images/thumbnail.png"


# COLORS
COLOR_PRIMARY=F3F4F8
COLOR_SECONDARY=000
COLOR_GRADONE=4472ad
COLOR_GRADTWO=009dea
COLOR_CARDONE=E8EAF0
COLOR_CARDTWO=049BE8
COLOR_LINKCOLOR=4f58a3
COLOR_ICON=4B9CE3

# TEXTS
NEXT_PUBLIC_TEXT_PRIZE_1ST_VAL="10N"
NEXT_PUBLIC_TEXT_PRIZE_2ND_VAL="5N"
NEXT_PUBLIC_TEXT_PRIZE_3RD_VAL="5N"
NEXT_PUBLIC_TEXT_PRIZE_1ST_TITLE="Top 10 on the Leaderboard"
NEXT_PUBLIC_TEXT_PRIZE_2ND_TITLE="Top 11-20 on the Leaderboard"
NEXT_PUBLIC_TEXT_PRIZE_3RD_TITLE="Most liked tweet with the hashtag MINSTA"

NEXT_PUBLIC_TEXT_ABOUT_1ST="Take a picture at Mintbase"
NEXT_PUBLIC_TEXT_ABOUT_2ND="Upload and it will mint as an NFT"
NEXT_PUBLIC_TEXT_ABOUT_3RD="Climb up the Leaderboard by minting"

```

## Local Development

To run the project locally, use:

  ```bash
  pnpm dev
  ```

## Updating Environment Variables

### Running Locally

If you're running your project locally, follow these steps to update your environment variables:

1. Save your changes in the `.env` file.
2. Run `pnpm dev` again to apply the updated environment variables.
3. Reload the page to reflect the changes.

### Deployed on Vercel

If you have deployed your project on Vercel, follow these steps to update your environment variables:

1. Log in to your Vercel account.
2. Navigate to the project settings for your deployed app.
3. Update the environment variables in the Vercel dashboard.
4. Trigger a redeployment of your app to apply the changes.

By following these steps, you can ensure that your project uses the updated environment variables.
