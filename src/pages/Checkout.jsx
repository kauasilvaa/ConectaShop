import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, QrCode, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export function Checkout({ cartItems, onClearCart }) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [isFinished, setIsFinished] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFinished(true);
    if (onClearCart) onClearCart();
  };

  if (isFinished) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col items-center">
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
          <h1 className="text-2xl font-black text-gray-900">Pedido Realizado com Sucesso!</h1>
          <p className="text-gray-600 mt-2 max-w-md">
            Obrigado por comprar no <strong>ConectaShop</strong>. O código de rastreio será enviado para o seu e-mail.
          </p>

          <button 
            onClick={() => navigate('/')}
            className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Voltar para a Página Inicial
          </button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-gray-800">Seu carrinho está vazio para finalizar a compra.</h2>
        <Link to="/" className="inline-block mt-4 text-red-600 font-bold hover:underline">
          Voltar às compras
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 font-medium mb-6">
        <ArrowLeft className="w-4 h-4" /> Continuar Comprando
      </Link>

      <h1 className="text-2xl font-black text-gray-900 mb-6">Finalização do Pedido</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Formulário de Endereço e Pagamento */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Endereço de Entrega */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-red-600" />
              <h2 className="text-lg font-bold text-gray-900">Endereço de Entrega</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">CEP</label>
                <input required type="text" placeholder="00000-000" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/50" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Rua / Avenida</label>
                <input required type="text" placeholder="Rua Exemplo" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/50" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Número</label>
                <input required type="text" placeholder="123" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/50" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Cidade / UF</label>
                <input required type="text" placeholder="São Paulo / SP" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/50" />
              </div>
            </div>
          </div>

          {/* Formas de Pagamento */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Forma de Pagamento</h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 font-bold text-sm transition-all ${
                  paymentMethod === 'pix' ? 'border-red-600 bg-red-50 text-red-600' : 'border-gray-200 text-gray-600'
                }`}
              >
                <QrCode className="w-5 h-5" /> Pix (Aprovação Instantânea)
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 font-bold text-sm transition-all ${
                  paymentMethod === 'card' ? 'border-red-600 bg-red-50 text-red-600' : 'border-gray-200 text-gray-600'
                }`}
              >
                <CreditCard className="w-5 h-5" /> Cartão de Crédito
              </button>
            </div>

            {paymentMethod === 'pix' ? (
              <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-200">
                <p className="text-xs text-gray-500 mb-2">QR Code gerado para teste:</p>
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ConectaShopPaymentTest" 
                  alt="QR Code Pix" 
                  className="mx-auto w-32 h-32"
                />
                <span className="text-xs font-bold text-emerald-600 block mt-2">Ganha 5% de desconto via Pix!</span>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Número do Cartão</label>
                  <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/50" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Validade</label>
                    <input required type="text" placeholder="MM/AA" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/50" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">CVV</label>
                    <input required type="text" placeholder="123" className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/50" />
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Resumo do Pedido */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 h-fit space-y-4">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">Resumo do Pedido</h2>

          <div className="space-y-3 max-h-60 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-gray-800 line-clamp-1">{item.name}</p>
                  <span className="text-xs text-gray-400">Qtd: {item.quantity}</span>
                </div>
                <span className="font-bold text-gray-900">R$ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-3 space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Frete</span>
              <span className="text-emerald-600 font-bold">Grátis</span>
            </div>
            <div className="flex justify-between text-base font-black text-gray-900 pt-2 border-t border-gray-100">
              <span>Total</span>
              <span className="text-red-600">R$ {total.toFixed(2)}</span>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-xl transition-colors shadow-md mt-4"
          >
            Pagar R$ {total.toFixed(2)}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Pagamento 100% Seguro Simulado</span>
          </div>
        </div>

      </form>
    </div>
  );
}