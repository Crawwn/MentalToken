# Mental Token (MENTAL)

ERC20 tabanlı, burnable, pausable, permit destekli ve capped (maksimum arz sınırlı) token.

## 📄 Contract Bilgileri
- **Name:** Mental Token
- **Symbol:** MENTAL
- **Decimals:** 18
- **Initial Supply:** 1,000,000 MENTAL
- **Cap Supply:** 10,000,000 MENTAL
- **Network:** Polygon Mainnet
- **Contract Address:** `0x832fdf27f901cc3b569c5c4e7018321e63fdf869`
- **Verified Source:** [Polygonscan](https://polygonscan.com/address/0x832fdf27f901cc3b569c5c4e7018321e63fdf869#code)

## 🚀 Kurulum ve Geliştirme

### Gereksinimler
- Node.js >= 18
- npm
- MetaMask (Polygon Mainnet yapılandırılmış)
- MATIC (gas için)

### Bağımlılıklar
```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-verify dotenv
npm install @openzeppelin/contracts
```

### Çevre Değişkenleri (.env)
Proje klasöründe `.env` dosyası oluşturun:
```
PRIVATE_KEY=0xYOUR_PRIVATE_KEY
POLYGONSCAN_API_KEY=YOUR_ETHERSCAN_MULTICHAIN_KEY
```

### Hardhat Ayarları (hardhat.config.js)
```js
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: { optimizer: { enabled: true, runs: 200 } },
  },
  networks: {
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
};
```

### Derleme
```bash
npx hardhat compile
```

### Deploy (Polygon Mainnet)
```bash
npx hardhat run scripts/deploy.js --network polygon
```

### Verify
```bash
npx hardhat verify --network polygon <CONTRACT_ADDRESS> <INITIAL_SUPPLY_WEI> <CAP_SUPPLY_WEI>
```

Örnek:
```bash
npx hardhat verify --network polygon 0x832fdf27f901cc3b569c5c4e7018321e63fdf869 1000000000000000000000000 10000000000000000000000000
```

## 🛠 Kullanım
Polygonscan “Write Contract” sekmesinden owner yetkili fonksiyonlar kullanılabilir:
- **mint(address to, uint256 amount)**
- **pause() / unpause()**
- **transferOwnership(address newOwner)**

Token transferi standart ERC20 `transfer` metodu ile yapılır.

---

**Not:** Owner işlemleri sadece deploy eden cüzdanla yapılabilir. 
Token 18 ondalıklı olduğu için miktarlar `amount * 10^18` formatında girilmelidir.
