const libCrypto = require('@waves/ts-lib-crypto');
const wavesTransaction = require('@waves/waves-transactions');

class Serverclient {

    constructor(seed) {
        this.nodeUrl = 'https://nodes-testnet.wavesnodes.com';
        this.login(seed);
    }

    createNewWallet = () => {
        const seed = libCrypto.randomSeed();

        return {
            seed: seed,
            publickey: libCrypto.publicKey(seed),
            secretkey: libCrypto.privateKey(seed),
            address: libCrypto.address(seed, 'T')
        }
    }

    login = (seed) => {
        this.walletSeed = seed;
        this.walletAddress = libCrypto.address(seed, 'T');
        this.walletPublicKey = libCrypto.publicKey(seed);
        this.walletPrivateKey = libCrypto.privateKey(seed);
    }

    logout = () => {}

    getBalance = () => {
        const context = this;
        return new Promise(function(resolve){
            wavesTransaction.nodeInteraction
                .balance(context.walletAddress,context.nodeUrl)
                .then(resolve);
        });
    }

    send = (address, amount) => {
        //amount 100000000 = 1 WAVES
        const context = this;
        return new Promise(function(resolve){
            const transaction = wavesTransaction
                .transfer(
                    {
                        recipient: address,
                        amount: amount,
                        chainId: 'T'
                    },
                    context.walletSeed
                );
            wavesTransaction
                .broadcast(transaction,context.nodeUrl)
                .then(resolve);
        });
    }
}

export default Serverclient;

