> crypto.
crypto.__proto__                 crypto.constructor               crypto.hasOwnProperty            crypto.isPrototypeOf
crypto.propertyIsEnumerable      crypto.toLocaleString            crypto.toString                  crypto.valueOf

crypto.Certificate               crypto.Cipher                    crypto.Cipheriv                  crypto.DEFAULT_ENCODING
crypto.Decipher                  crypto.Decipheriv                crypto.DiffieHellman             crypto.DiffieHellmanGroup
crypto.ECDH                      crypto.Hash                      crypto.Hmac                      crypto.KeyObject
crypto.Sign                      crypto.Verify                    crypto.X509Certificate           crypto.checkPrime
crypto.checkPrimeSync            crypto.constants                 crypto.createCipher              crypto.createCipheriv
crypto.createDecipher            crypto.createDecipheriv          crypto.createDiffieHellman       crypto.createDiffieHellmanGroup   
crypto.createECDH                crypto.createHash                crypto.createHmac                crypto.createPrivateKey
crypto.createPublicKey           crypto.createSecretKey           crypto.createSign                crypto.createVerify
crypto.diffieHellman             crypto.fips                      crypto.generateKey               crypto.generateKeyPair
crypto.generateKeyPairSync       crypto.generateKeySync           crypto.generatePrime             crypto.generatePrimeSync
crypto.getCipherInfo             crypto.getCiphers                crypto.getCurves                 crypto.getDiffieHellman
crypto.getFips                   crypto.getHashes                 crypto.getRandomValues           crypto.hkdf
crypto.hkdfSync                  crypto.pbkdf2                    crypto.pbkdf2Sync                crypto.privateDecrypt
crypto.privateEncrypt            crypto.prng                      crypto.pseudoRandomBytes         crypto.publicDecrypt
crypto.publicEncrypt             crypto.randomBytes               crypto.randomFill                crypto.randomFillSync
crypto.randomInt                 crypto.randomUUID                crypto.rng                       crypto.scrypt
crypto.scryptSync                crypto.secureHeapUsed            crypto.setEngine                 crypto.setFips
crypto.sign                      crypto.subtle                    crypto.timingSafeEqual           crypto.verify
crypto.webcrypto

> crypto.randomBytes(16)
<Buffer 50 3b 3b b6 77 0f dd f0 53 42 f5 11 ea d5 f4 86>
> crypto.randomBytes(16).toString()
'Gui��k�Zy�\x18���.�'
> crypto.randomBytes(16).toString("hex")
'fdbcfe55dc81cb19dab2c76790cfa490'
>