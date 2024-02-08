import {
  Program,
  AnchorProvider,
  Idl,
  setProvider,
} from "@project-serum/anchor"
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet"
import { IDL, TinyAdventure } from "../idl/tiny_adventure"
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js"
import { Pier } from "@/idl/pier"

// Create a connection to the devnet cluster
export const connection = new Connection(clusterApiUrl("devnet"), {
  commitment: "confirmed",
})

// Create a placeholder wallet to set up AnchorProvider
const wallet = new NodeWallet(Keypair.generate())

// Create an Anchor provider
const provider = new AnchorProvider(connection, wallet, {})

// Set the provider as the default provider
setProvider(provider)

// Tiny Adventure program ID
const programId = new PublicKey("H199AQZps28Ma6mvtb2YKtm8pGGMvU2SYVhKznQddZLF")

const pierProgramId = new PublicKey("4FGaoyoUkc2FrHrMgQghiicBvFXJ4pMjAztdophjmeyv")

export const program = new Program(
  IDL as Idl,
  programId
) as unknown as Program<TinyAdventure>

export const pierProgram = new Program(
  Pier as Pier,
  pierProgramId
)

// GameDataAccount PDA
export const [globalLevel1GameDataAccount] = PublicKey.findProgramAddressSync(
  [Buffer.from("level1", "utf8")],
  programId
)
