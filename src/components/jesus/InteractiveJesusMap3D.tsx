import React, { useState } from 'react';
import {
  SACRED_PLACES_3D,
  RECONSTRUCTED_ROUTES,
  TOTAL_DISTANCE_METHODOLOGY,
  SacredPlace3D,
  ReconstructedRoute
} from '../../data/christGeography3DData';
import {
  MapPin,
  Compass,
  Navigation,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  BookOpen,
  Info,
  X,
  Layers,
  ChevronRight,
  Maximize2,
  Footprints,
  Eye
} from 'lucide-react';

interface InteractiveJesusMap3DProps {
  onStudyWithGemini?: (prompt: string) => void;
}

export const InteractiveJesusMap3D: React.FC<InteractiveJesusMap3DProps> = ({ onStudyWithGemini }) => {
  const [selectedPlace, setSelectedPlace] = useState<SacredPlace3D | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<ReconstructedRoute | null>(null);
  const [showMethodologyModal, setShowMethodologyModal] = useState<boolean>(false);
  const [activeRegionFilter, setActiveRegionFilter] = useState<string>('all');
  
  // 3D Perspective Controls
  const [pitch, setPitch] = useState<number>(38); // Inclinação 3D (graus)
  const [rotation, setRotation] = useState<number>(-8); // Rotação (graus)
  const [zoom, setZoom] = useState<number>(1); // Nível de Zoom
  const [is3DMode, setIs3DMode] = useState<boolean>(true);

  const resetView = () => {
    setPitch(38);
    setRotation(-8);
    setZoom(1);
    setIs3DMode(true);
  };

  const filteredPlaces = SACRED_PLACES_3D.filter((place) => {
    if (activeRegionFilter === 'all') return true;
    return place.region === activeRegionFilter;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner do Mapa */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-white rounded-3xl p-6 sm:p-7 border border-amber-500/30 relative overflow-hidden shadow-xl">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Geografia Sagrada & Topografia no Século I</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white flex items-center gap-2">
              <span>🗺️ O CAMINHO DE JESUS</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Explore o relevo tridimensional da Terra Santa, os 17 lugares históricos onde o Senhor pregou, realizou milagres e cumpriu a redenção, com rotas geográficas estimadas e distâncias documentadas.
            </p>
          </div>

          {/* Botões Rápidos de Ação */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setShowMethodologyModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 text-xs font-semibold shadow-md transition-all"
            >
              <Footprints className="w-4 h-4 text-amber-400" />
              <span>Painel de Distâncias & Metodologia</span>
            </button>
            <button
              onClick={() => setIs3DMode(!is3DMode)}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-medium transition-all"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>{is3DMode ? 'Modo 3D Ativo' : 'Modo 2D Plano'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Filtros e Controles do Mapa 3D */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
        {/* Filtro por Região */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" /> Região:
          </span>
          {[
            { id: 'all', label: 'Todos (17)' },
            { id: 'Galileia', label: 'Galileia' },
            { id: 'Samaria', label: 'Samaria' },
            { id: 'Judeia', label: 'Judeia' },
            { id: 'Vale do Jordão / Decápolis', label: 'Vale do Jordão' }
          ].map((reg) => (
            <button
              key={reg.id}
              onClick={() => setActiveRegionFilter(reg.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeRegionFilter === reg.id
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {reg.label}
            </button>
          ))}
        </div>

        {/* Controles de Órbita / Inclinação e Zoom */}
        <div className="flex items-center gap-1.5 ml-auto">
          {is3DMode && (
            <>
              <button
                onClick={() => setPitch(Math.min(pitch + 6, 60))}
                title="Aumentar inclinação 3D"
                className="px-2.5 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-amber-100 dark:hover:bg-amber-950/60 text-stone-700 dark:text-stone-300 text-xs font-semibold transition-colors"
              >
                Inclinar +
              </button>
              <button
                onClick={() => setPitch(Math.max(pitch - 6, 10))}
                title="Reduzir inclinação 3D"
                className="px-2.5 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-amber-100 dark:hover:bg-amber-950/60 text-stone-700 dark:text-stone-300 text-xs font-semibold transition-colors"
              >
                Inclinar -
              </button>
              <button
                onClick={() => setRotation(rotation + 15)}
                title="Girar ângulo 3D"
                className="p-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-amber-950/60 transition-colors"
              >
                <Compass className="w-4 h-4" />
              </button>
            </>
          )}
          <button
            onClick={() => setZoom(Math.min(zoom + 0.15, 1.6))}
            title="Aproximar (Zoom In)"
            className="p-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoom(Math.max(zoom - 0.15, 0.75))}
            title="Afastar (Zoom Out)"
            className="p-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={resetView}
            title="Resetar visão original"
            className="p-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ÁREA DO MAPA 3D ISOMÉTRICO INTERATIVO */}
      <div className="relative rounded-3xl bg-gradient-to-b from-stone-900 via-stone-950 to-amber-950/80 p-4 sm:p-6 overflow-hidden border border-amber-600/30 shadow-2xl min-h-[580px] flex flex-col justify-between select-none">
        
        {/* Rosa dos Ventos e Legenda 3D no Canto Superior Esquerdo */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/10 text-white text-xs">
          <Navigation className="w-4 h-4 text-amber-400 rotate-[-45deg]" />
          <div>
            <div className="font-bold text-[11px] uppercase tracking-wider text-amber-300">Norte Bíblico</div>
            <div className="text-[9px] text-stone-400 font-mono">Topografia • Século I d.C.</div>
          </div>
        </div>

        {/* Indicador de Rota Selecionada no Topo Direito */}
        {selectedRoute && (
          <div className="absolute top-4 right-4 z-20 max-w-sm bg-black/80 backdrop-blur-md p-3.5 rounded-2xl border border-amber-500/40 text-white space-y-1 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300">{selectedRoute.name}</span>
              <button
                onClick={() => setSelectedRoute(null)}
                className="text-stone-400 hover:text-white p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="text-[11px] text-stone-300">{selectedRoute.description}</div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px]">
              <span className="font-bold text-amber-400">Distância estimada: ~{selectedRoute.approxDistanceKm} km</span>
              <span className="italic text-stone-400">Reconstrução bíblica</span>
            </div>
          </div>
        )}

        {/* Container com Transformação de Perspectiva 3D */}
        <div 
          className="relative w-full h-[500px] flex items-center justify-center transition-transform duration-300 ease-out"
          style={{
            perspective: is3DMode ? '1200px' : 'none'
          }}
        >
          <div
            className="relative w-[92%] h-[92%] rounded-3xl transition-transform duration-300"
            style={{
              transform: is3DMode
                ? `rotateX(${pitch}deg) rotateZ(${rotation}deg) scale(${zoom})`
                : `scale(${zoom})`,
              transformStyle: 'preserve-3d',
              background: 'radial-gradient(ellipse at 45% 45%, #2a241b 0%, #171410 70%, #0d0b08 100%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75), inset 0 0 100px rgba(217, 119, 6, 0.08)'
            }}
          >
            {/* SVG Decorativo de Relevo, Linhas de Nível e Massas de Água */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                {/* Gradiente do Mar Mediterrâneo (Oeste) */}
                <linearGradient id="seaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0369a1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0.0" />
                </linearGradient>
                {/* Gradiente das Águas do Mar da Galileia e Mar Morto */}
                <radialGradient id="lakeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.5" />
                </radialGradient>
              </defs>

              {/* Costa do Mediterrâneo (Margem Ocidental) */}
              <path d="M 0,0 L 18,0 Q 14,30 22,60 Q 20,80 15,100 L 0,100 Z" fill="url(#seaGrad)" />
              <path d="M 18,0 Q 14,30 22,60 Q 20,80 15,100" fill="none" stroke="#38bdf8" strokeWidth="0.4" strokeDasharray="1,1" opacity="0.6" />

              {/* Mar da Galileia (Kinneret) */}
              <ellipse cx="58" cy="17" rx="5" ry="4" fill="url(#lakeGrad)" stroke="#7dd3fc" strokeWidth="0.6" />
              <text x="58" y="17.5" fill="#bae6fd" fontSize="2.2" fontWeight="bold" textAnchor="middle">Mar da Galileia</text>

              {/* Rio Jordão correndo para o sul */}
              <path
                d="M 58,21 Q 61,35 59,48 Q 60,60 59,70 Q 58,74 58,78"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="0.7"
                strokeDasharray="2,0.5"
              />
              <text x="63" y="44" fill="#7dd3fc" fontSize="1.8" fontStyle="italic" opacity="0.8">Rio Jordão</text>

              {/* Mar Morto (Mar Salgado no Sul) */}
              <path
                d="M 56,78 Q 61,78 61,84 Q 60,94 58,98 Q 54,98 54,90 Z"
                fill="#0f766e"
                opacity="0.5"
                stroke="#2dd4bf"
                strokeWidth="0.5"
              />
              <text x="58" y="88" fill="#99f6e4" fontSize="2.0" textAnchor="middle">Mar Morto</text>

              {/* Curvas de Nível Topográficas Simbolizadas */}
              <ellipse cx="44" cy="68" rx="14" ry="12" fill="none" stroke="#d97706" strokeWidth="0.25" opacity="0.3" />
              <ellipse cx="42" cy="18" rx="16" ry="10" fill="none" stroke="#d97706" strokeWidth="0.25" opacity="0.3" />
              <ellipse cx="44" cy="45" rx="12" ry="8" fill="none" stroke="#d97706" strokeWidth="0.25" opacity="0.2" />

              {/* Linhas de Rotas Geográficas Selecionadas */}
              {selectedRoute && (
                <polyline
                  points={selectedRoute.waypoints
                    .map((wpId) => {
                      const pl = SACRED_PLACES_3D.find((p) => p.id === wpId);
                      return pl ? `${pl.coords.x},${pl.coords.y}` : '';
                    })
                    .filter(Boolean)
                    .join(' ')}
                  fill="none"
                  stroke={selectedRoute.color}
                  strokeWidth="1.2"
                  strokeDasharray="2,1.5"
                  className="animate-pulse"
                />
              )}
            </svg>

            {/* MARCADORES INTERATIVOS DOS 17 LOCAIS */}
            {filteredPlaces.map((place) => {
              const isSelected = selectedPlace?.id === place.id;
              const isPartOfRoute = selectedRoute?.waypoints.includes(place.id);

              return (
                <div
                  key={place.id}
                  onClick={() => setSelectedPlace(place)}
                  className="absolute cursor-pointer group transition-all duration-200"
                  style={{
                    left: `${place.coords.x}%`,
                    top: `${place.coords.y}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isSelected ? 40 : 25
                  }}
                >
                  {/* Pin com Efeito 3D e Pulso Luminoso */}
                  <div className="relative flex flex-col items-center">
                    {/* Anel de Pulso */}
                    <div
                      className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'bg-amber-400/40 animate-ping'
                          : isPartOfRoute
                          ? 'bg-sky-400/30 animate-pulse'
                          : 'group-hover:bg-amber-500/20'
                      }`}
                    />

                    {/* Ícone Marcador */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg border-2 transition-transform duration-200 ${
                        isSelected
                          ? 'bg-gradient-to-tr from-amber-500 to-amber-300 text-stone-950 border-white scale-125 ring-4 ring-amber-500/40'
                          : isPartOfRoute
                          ? 'bg-sky-600 text-white border-sky-300 scale-110'
                          : 'bg-stone-900/90 text-amber-400 border-amber-500/60 hover:scale-110 hover:border-amber-300'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    {/* Nome do Local (Label) */}
                    <div
                      className={`mt-1 px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold whitespace-nowrap shadow-md pointer-events-none transition-all ${
                        isSelected
                          ? 'bg-amber-400 text-stone-950 scale-105'
                          : 'bg-black/80 text-amber-200/90 group-hover:text-white group-hover:bg-black'
                      }`}
                    >
                      {place.name.split(' ')[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Seletor de Rotas Reconstruídas no Rodapé do Mapa */}
        <div className="relative z-20 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-white text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-300 flex items-center gap-1.5">
              <Footprints className="w-4 h-4 text-amber-400" /> Rotas Documentadas:
            </span>
            <span className="text-[11px] text-stone-400 hidden sm:inline">
              (Toque para desenhar a linha do percurso no mapa)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {RECONSTRUCTED_ROUTES.map((route) => {
              const isActive = selectedRoute?.id === route.id;
              return (
                <button
                  key={route.id}
                  onClick={() => setSelectedRoute(isActive ? null : route)}
                  className={`px-3 py-1.5 rounded-xl font-medium text-xs transition-all flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 font-bold border-amber-300 shadow-md'
                      : 'bg-black/40 text-stone-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: route.color }}
                  />
                  <span>{route.name.split(':')[0]} (~{route.approxDistanceKm} km)</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* PAINEL / DRAWER DE DETALHES DO LUGAR SELECIONADO */}
      {selectedPlace && (
        <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-7 border border-amber-600/30 dark:border-amber-600/20 shadow-xl space-y-5 animate-slideUp">
          <div className="flex items-start justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/40">
                  {selectedPlace.region}
                </span>
                <span className="text-xs text-stone-400 font-mono">
                  Alt. ~{selectedPlace.coords.elevation} m
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                {selectedPlace.name}
              </h3>
              <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-400 font-serif italic mt-0.5">
                {selectedPlace.nativeName} ({selectedPlace.transliteration}) — <em>{selectedPlace.meaning}</em>
              </p>
            </div>

            <button
              onClick={() => setSelectedPlace(null)}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            {selectedPlace.descriptionShort}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Eventos Registrados */}
            <div className="bg-amber-50/60 dark:bg-stone-800/60 p-4 rounded-2xl border border-amber-200/60 dark:border-stone-700/60 space-y-2">
              <h4 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" /> Eventos Bíblicos de Jesus
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                {selectedPlace.events.map((ev, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Milagres Ocorridos */}
            <div className="bg-rose-50/60 dark:bg-stone-800/60 p-4 rounded-2xl border border-rose-200/60 dark:border-stone-700/60 space-y-2">
              <h4 className="text-xs font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" /> Milagres Realizados
              </h4>
              {selectedPlace.miracles.length > 0 ? (
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {selectedPlace.miracles.map((mil, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-600 font-bold">✨</span>
                      <span>{mil}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-stone-500 italic">
                  Nenhum milagre específico detalhado textualmente neste local nas Escrituras.
                </p>
              )}
            </div>

            {/* Ensinamentos de Jesus */}
            <div className="bg-stone-50 dark:bg-stone-800/40 p-4 rounded-2xl border border-stone-200 dark:border-stone-700 space-y-2">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-200 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-600" /> Ensinamentos Proferidos
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                {selectedPlace.teachings.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">📖</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Referências Bíblicas */}
            <div className="bg-stone-50 dark:bg-stone-800/40 p-4 rounded-2xl border border-stone-200 dark:border-stone-700 space-y-2">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-200 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" /> Referências Bíblicas Fundamentais
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedPlace.biblicalReferences.map((ref, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-xl text-xs font-mono font-medium bg-amber-100/70 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/40"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Botão de Estudo Teológico Integrado */}
          {onStudyWithGemini && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => onStudyWithGemini(`Explique a importância geográfica, histórica e teológica de ${selectedPlace.name} na vida de Jesus Cristo, seus termos originais e cumprimento profético.`)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-md transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Aprofundar estudo sobre {selectedPlace.name} com IA</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* MODAL: PAINEL DE DISTÂNCIA ESTIMADA & METODOLOGIA */}
      {showMethodologyModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-amber-600/30 shadow-2xl space-y-5 animate-scaleUp my-8">
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                  📏
                </span>
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  {TOTAL_DISTANCE_METHODOLOGY.title}
                </h3>
              </div>
              <button
                onClick={() => setShowMethodologyModal(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Aviso Obrigatório de Honestidade Intelectual */}
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 leading-relaxed space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                <Info className="w-4 h-4 shrink-0" />
                <span>Nota de Precisão Histórica & Bíblica</span>
              </div>
              <p>{TOTAL_DISTANCE_METHODOLOGY.disclaimer}</p>
            </div>

            {/* Métricas Estimadas */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-center">
                <span className="block text-[10px] uppercase font-bold text-stone-500">Estimativa Mínima</span>
                <span className="text-xl font-bold font-mono text-amber-600 dark:text-amber-400">~{TOTAL_DISTANCE_METHODOLOGY.totalEstimatedKmMin} km</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-center">
                <span className="block text-[10px] uppercase font-bold text-stone-500">Estimativa Máxima</span>
                <span className="text-xl font-bold font-mono text-amber-600 dark:text-amber-400">~{TOTAL_DISTANCE_METHODOLOGY.totalEstimatedKmMax} km</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-center">
                <span className="block text-[10px] uppercase font-bold text-stone-500">Meio de Transporte</span>
                <span className="text-sm font-bold text-stone-800 dark:text-stone-200">A pé (Sandálias)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-center">
                <span className="block text-[10px] uppercase font-bold text-stone-500">Duração</span>
                <span className="text-sm font-bold text-stone-800 dark:text-stone-200">~3 anos e meio</span>
              </div>
            </div>

            {/* Texto Explicativo da Metodologia */}
            <div className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed max-h-60 overflow-y-auto pr-2">
              <h4 className="font-bold text-stone-900 dark:text-stone-100">Metodologia e Critérios de Cálculo:</h4>
              <div className="whitespace-pre-line text-xs font-sans text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-800/60 p-3.5 rounded-2xl border border-stone-200 dark:border-stone-700">
                {TOTAL_DISTANCE_METHODOLOGY.methodologyText}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowMethodologyModal(false)}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors"
              >
                Compreendi e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
