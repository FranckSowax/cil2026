'use client';

import Link from 'next/link';
import { useCart, workshopPrice } from '@/context/CartContext';
import { ShoppingCart, Trash2, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

export default function PanierPage() {
  const { items, removeItem, workshop, setWorkshop, getTotal, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const isEmpty = items.length === 0;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1] to-[#1e3a8a]"></div>
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-white/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <ShoppingCart className="w-3 sm:w-4 h-3 sm:h-4 text-white mr-2" />
              <span className="text-xs sm:text-sm text-white font-medium">{items.length} article{items.length !== 1 ? 's' : ''} dans votre panier</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
              Votre <span className="text-blue-200">Panier</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {isEmpty ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Votre panier est vide</h2>
              <p className="text-gray-500 mb-8">Choisissez une formule d&apos;inscription pour commencer</p>
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#4169E1] text-white font-bold rounded-full hover:bg-[#3154b3] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Voir les tarifs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-gray-500 text-sm mb-3">{item.category}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-[#4169E1] font-bold text-xl">
                            {formatPrice(item.price)} FCFA
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors group"
                        title="Supprimer"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Workshop Option */}
                <div className={`rounded-2xl p-6 border transition-all ${
                  workshop 
                    ? 'border-[#4169E1] bg-blue-50/50 shadow-md' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className={`w-5 h-5 ${workshop ? 'text-[#4169E1]' : 'text-gray-400'}`} />
                        <h3 className="text-lg font-bold text-gray-900">Ateliers Pré-Colloque</h3>
                      </div>
                      <p className="text-gray-500 text-sm mb-3">Formation NVIVO + Équations Structurelles (SEM)</p>
                      <span className={`font-bold text-xl ${workshop ? 'text-[#4169E1]' : 'text-gray-400'}`}>
                        +{formatPrice(workshopPrice)} FCFA
                      </span>
                    </div>
                    <button
                      onClick={() => setWorkshop(!workshop)}
                      className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                        workshop
                          ? 'bg-[#4169E1] text-white shadow-md'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {workshop ? 'Inclus' : 'Ajouter'}
                    </button>
                  </div>
                </div>

                {/* Clear Cart */}
                <div className="text-right">
                  <button
                    onClick={clearCart}
                    className="text-gray-500 hover:text-red-500 text-sm inline-flex items-center gap-2 transition-colors font-medium"
                  >
                    <Trash2 className="w-4 h-4" />
                    Vider le panier
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 sticky top-24 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Récapitulatif</h3>
                  
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="font-semibold text-gray-900">{formatPrice(item.price)} FCFA</span>
                      </div>
                    ))}
                    {workshop && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Ateliers pré-colloque</span>
                        <span className="font-semibold text-gray-900">{formatPrice(workshopPrice)} FCFA</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-bold text-lg">Total</span>
                      <span className="text-[#4169E1] font-bold text-2xl">{formatPrice(getTotal())} FCFA</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="block w-full py-4 text-center bg-[#4169E1] text-white font-bold rounded-xl hover:bg-[#3154b3] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    Procéder au paiement
                  </Link>

                  <Link
                    href="/inscription"
                    className="block w-full py-3 mt-3 text-center text-gray-500 hover:text-[#4169E1] transition-colors text-sm font-medium"
                  >
                    <ArrowLeft className="w-4 h-4 inline mr-2" />
                    Continuer les achats
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

