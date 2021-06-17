import { Signer } from '@waves/signer';
import { ProviderCloud } from '@waves.exchange/provider-cloud';


class Webclient {

    constructor() {
        this._signer = new Signer({
            NODE_URL: 'https://nodes-testnet.wavesnodes.com' //testnet
        });
        this._signer.setProvider(new ProviderCloud('https://testnet.waves.exchange/signer/'));
        this.walletAddress = '';
        this.walletPublicKey = '';
    }

    login = () => {
        const context = this;
        return new Promise(function(resolve){
            context._signer
                .login()
                .then(function(userData){
                    context.walletAddress = userData.address;
                    context.walletPublicKey = userData.publicKey;
                    resolve(userData);
                });
        });
    }

    logout = () => this._signer.logout

    getBalance = () => {
        const context = this;
        return new Promise(function (resolve) {
            context._signer
                .getBalance()
                .then(function (balances) {
                    if (!balances.length) {
                        resolve('');
                    }
                    for (let i = 0; i < balances.length; i++) {
                        if (balances[i].assetId && balances[i].assetId === 'WAVES') {
                            resolve(balances[i].amount);
                        }
                    }
                });
        });
    }
}

export default Webclient;

