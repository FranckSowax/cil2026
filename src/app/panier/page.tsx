'use client';

import Link from 'next/link';
import { useCart, workshopPrice } from '@/context/CartContext';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

export default function PanierPage() {
  const { items, removeItem, workshop, setWorkshop, getTotal, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const isEmpty = items.length === 0;

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#00D9C5]/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
              <ShoppingCart className="w-3 sm:w-4 h-3 sm:h-4 text-[#00D9C5] mr-2" />
              <span className="text-xs sm:text-sm text-[#B0B0B0]">{items.length} article{items.length !== 1 ? 's' : ''} dans votre panier</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Votre <span className="text-[#00D9C5]">Panier</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {isEmpty ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-10 h-10 sm:w-12 sm:h-12 text-[#B0B0B0]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Votre panier est vide</h2>
              <p className="text-[#B0B0B0] mb-8">Choisissez une formule d&apos;inscription pour commencer</p>
              <Link 
                href="/inscription"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#00D9C5] text-black font-bold rounded-full hover:scale-105 transition-all text-sm sm:text-base"
              >
                Voir les tarifs
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{item.name}</h3>
                        <p className="text-[#B0B0B0] text-sm mb-3">{item.category}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-[#00D9C5] font-bold text-lg sm:text-xl">
                            {formatPrice(item.price)} FCFA
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 sm:p-3 bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 rounded-xl transition-all group"
                      >
                        <Trash2 className="w-4 sm:w-5 h-4 sm:h-5 text-[#B0B0B0] group-hover:text-red-400" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Workshop Option */}
                <div className={`bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border transition-all ${
                  workshop ? 'border-[#00D9C5]/50 bg-[#00D9C5]/5' : 'border-white/10'
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-4 h-4 text-[#B8B5FF]" />
                        <h3 className="text-lg sm:text-xl font-bold text-white">Ateliers Pré-Colloque</h3>
                      </div>
                      <p className="text-[#B0B0B0] text-sm mb-3">Formation NVIVO + Équations Structurelles (SEM)</p>
                      <span className="text-[#00D9C5] font-bold text-lg sm:text-xl">
                        +{formatPrice(workshopPrice)} FCFA
                      </span>
                    </div>
                    <button
                      onClick={() => setWorkshop(!workshop)}
                      className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                        workshop 
                          ? 'bg-[#00D9C5] text-black' 
                          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {workshop ? 'Inclus' : 'Ajouter'}
                    </button>
                  </div>
                </div>

                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="text-[#B0B0B0] hover:text-red-400 text-sm flex items-center gap-2 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Vider le panier
                </button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 sticky top-24">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-6">Récapitulatif</h3>
                  
                  <div className="space-y-3 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-[#B0B0B0]">{item.name}</span>
                        <span className="text-white">{formatPrice(item.price)} FCFA</span>
                      </div>
                    ))}
                    {workshop && (
                      <div className="flex justify-between text-sm">
                        <span className="text-[#B0B0B0]">Ateliers pré-colloque</span>
                        <span className="text-white">{formatPrice(workshopPrice)} FCFA</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-white/10 pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-white font-bold">Total</span>
                      <span className="text-[#00D9C5] font-bold text-xl">{formatPrice(getTotal())} FCFA</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="block w-full py-3 sm:py-4 text-center bg-[#00D9C5] text-black font-bold rounded-full hover:scale-105 transition-all text-sm sm:text-base"
                    style={{ boxShadow: '0 0 30px rgba(0, 217, 197, 0.3)' }}
                  >
                    Procéder au paiement
                  </Link>

                  <Link
                    href="/inscription"
                    className="block w-full py-3 mt-3 text-center text-[#B0B0B0] hover:text-white transition-colors text-sm"
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
