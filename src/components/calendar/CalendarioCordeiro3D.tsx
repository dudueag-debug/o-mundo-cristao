import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { getCordeiroDevocionalDoDia, CalendarioCordeiroDia } from '../../data/calendarioCordeiroData';
import { Sparkles, RotateCw, ZoomIn, ZoomOut, Calendar, BookOpen, Heart, Quote, ArrowRight, Eye } from 'lucide-react';

interface CalendarioCordeiro3DProps {
  onStudyWithGemini?: (prompt: string) => void;
  onNavigateToBible?: () => void;
}

export const CalendarioCordeiro3D: React.FC<CalendarioCordeiro3DProps> = ({
  onStudyWithGemini,
  onNavigateToBible
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const now = new Date();
  const [selectedDay, setSelectedDay] = useState<number>(now.getDate());
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const isAutoRotatingRef = useRef(isAutoRotating);
  isAutoRotatingRef.current = isAutoRotating;

  const zoomLevelRef = useRef(zoomLevel);
  zoomLevelRef.current = zoomLevel;

  // Informações do mês atual
  const currentMonthName = now.toLocaleDateString('pt-BR', { month: 'long' });
  const currentYear = now.getFullYear();
  const daysInCurrentMonth = new Date(currentYear, now.getMonth() + 1, 0).getDate();

  const devocionalDia: CalendarioCordeiroDia = getCordeiroDevocionalDoDia(selectedDay);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensões do container
    const width = container.clientWidth || 600;
    const height = 360;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x120c08); // Marrom escuro reverente e acolhedor
    scene.fog = new THREE.FogExp2(0x120c08, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Iluminação Sagrada
    const ambientLight = new THREE.AmbientLight(0xffeedd, 1.2);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xfff3cc, 2.5);
    goldKeyLight.position.set(5, 8, 5);
    goldKeyLight.castShadow = true;
    goldKeyLight.shadow.mapSize.width = 1024;
    goldKeyLight.shadow.mapSize.height = 1024;
    scene.add(goldKeyLight);

    const rimLight = new THREE.PointLight(0xd4af37, 2.0, 10);
    rimLight.position.set(-3, 3, -4);
    scene.add(rimLight);

    // 3. Grupo Principal do Cordeiro
    const lambGroup = new THREE.Group();
    scene.add(lambGroup);

    // Materiais
    const woolMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5f3ee,
      roughness: 0.85,
      metalness: 0.05
    });

    const skinMaterial = new THREE.MeshStandardMaterial({
      color: 0xeadac7,
      roughness: 0.6,
      metalness: 0.02
    });

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      roughness: 0.3,
      metalness: 0.85,
      emissive: 0x996515,
      emissiveIntensity: 0.25
    });

    const bookMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a1e12,
      roughness: 0.5,
      metalness: 0.2
    });

    // 3.1 Base: Livro da Vida / Altar da Graça
    const altarGeometry = new THREE.BoxGeometry(4.2, 0.45, 3.2);
    const altarMesh = new THREE.Mesh(altarGeometry, bookMaterial);
    altarMesh.position.y = -0.22;
    altarMesh.receiveShadow = true;
    lambGroup.add(altarMesh);

    // Borda Dourada do Livro
    const bookGoldGeo = new THREE.BoxGeometry(4.3, 0.12, 3.3);
    const bookGoldMesh = new THREE.Mesh(bookGoldGeo, goldMaterial);
    bookGoldMesh.position.y = -0.22;
    lambGroup.add(bookGoldMesh);

    // 3.2 Corpo do Cordeiro (Formato orgânico aconchegante)
    const bodyGeometry = new THREE.SphereGeometry(1.05, 24, 20);
    bodyGeometry.scale(1.25, 0.9, 1.45);
    const bodyMesh = new THREE.Mesh(bodyGeometry, woolMaterial);
    bodyMesh.position.set(0, 0.85, -0.1);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    lambGroup.add(bodyMesh);

    // Nódulos de lã (texturização procedural 3D de lã suave)
    const tuftGeo = new THREE.SphereGeometry(0.38, 12, 10);
    const tuftPositions = [
      [0.6, 1.1, 0.4],
      [-0.6, 1.1, 0.4],
      [0.75, 0.8, -0.3],
      [-0.75, 0.8, -0.3],
      [0, 1.3, -0.2],
      [0.4, 1.25, -0.5],
      [-0.4, 1.25, -0.5],
      [0, 1.2, 0.6],
      [0.55, 0.6, 0.6],
      [-0.55, 0.6, 0.6]
    ];
    tuftPositions.forEach(([x, y, z]) => {
      const tuft = new THREE.Mesh(tuftGeo, woolMaterial);
      tuft.position.set(x, y, z);
      lambGroup.add(tuft);
    });

    // 3.3 Cabeça do Cordeiro
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.55, 1.1);

    const headGeo = new THREE.SphereGeometry(0.55, 20, 18);
    headGeo.scale(0.85, 0.95, 1.1);
    const headMesh = new THREE.Mesh(headGeo, woolMaterial);
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Focinho manso
    const snoutGeo = new THREE.SphereGeometry(0.32, 16, 14);
    snoutGeo.scale(0.85, 0.7, 1.2);
    const snoutMesh = new THREE.Mesh(snoutGeo, skinMaterial);
    snoutMesh.position.set(0, -0.12, 0.48);
    headGroup.add(snoutMesh);

    // Olhos pacíficos
    const eyeGeo = new THREE.SphereGeometry(0.065, 12, 10);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1f140e });
    const eyeLeft = new THREE.Mesh(eyeGeo, eyeMat);
    eyeLeft.position.set(0.24, 0.05, 0.42);
    const eyeRight = new THREE.Mesh(eyeGeo, eyeMat);
    eyeRight.position.set(-0.24, 0.05, 0.42);
    headGroup.add(eyeLeft, eyeRight);

    // Orelhas suaves caídas em mansidão
    const earGeo = new THREE.ConeGeometry(0.18, 0.65, 12);
    const earLeft = new THREE.Mesh(earGeo, skinMaterial);
    earLeft.position.set(0.52, 0.1, 0.05);
    earLeft.rotation.set(0.4, 0.2, -1.2);
    const earRight = new THREE.Mesh(earGeo, skinMaterial);
    earRight.position.set(-0.52, 0.1, 0.05);
    earRight.rotation.set(0.4, -0.2, 1.2);
    headGroup.add(earLeft, earRight);

    // 3.4 Auréola Sagrada Dourada (Nimbo com Cruz)
    const haloGeo = new THREE.TorusGeometry(0.75, 0.055, 16, 48);
    const haloMesh = new THREE.Mesh(haloGeo, goldMaterial);
    haloMesh.position.set(0, 0.1, -0.35);
    haloMesh.rotation.x = Math.PI * 0.15;
    headGroup.add(haloMesh);

    lambGroup.add(headGroup);

    // 3.5 Pernas recolhidas em repouso paciente
    const legGeo = new THREE.CylinderGeometry(0.18, 0.16, 0.8, 12);
    legGeo.rotateZ(Math.PI / 2);
    const legLeft = new THREE.Mesh(legGeo, woolMaterial);
    legLeft.position.set(0.75, 0.25, 0.3);
    const legRight = new THREE.Mesh(legGeo, woolMaterial);
    legRight.position.set(-0.75, 0.25, 0.3);
    lambGroup.add(legLeft, legRight);

    // 3.6 Estandarte da Cruz / Vitória do Agnus Dei
    const bannerGroup = new THREE.Group();
    bannerGroup.position.set(0.85, 0, -0.6);

    // Mastro Dourado da Cruz
    const staffGeo = new THREE.CylinderGeometry(0.045, 0.045, 3.8, 16);
    const staffMesh = new THREE.Mesh(staffGeo, goldMaterial);
    staffMesh.position.y = 1.9;
    staffMesh.castShadow = true;
    bannerGroup.add(staffMesh);

    // Travessa da Cruz
    const crossBarGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.8, 16);
    crossBarGeo.rotateZ(Math.PI / 2);
    const crossBarMesh = new THREE.Mesh(crossBarGeo, goldMaterial);
    crossBarMesh.position.y = 3.4;
    bannerGroup.add(crossBarMesh);

    // Flâmula de Vitória com Cruz Vermelha
    const flagGeo = new THREE.PlaneGeometry(1.2, 0.75, 12, 6);
    const flagMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      roughness: 0.6
    });
    const flagMesh = new THREE.Mesh(flagGeo, flagMat);
    flagMesh.position.set(0.68, 3.0, 0);
    bannerGroup.add(flagMesh);

    // Cruz vermelha central na flâmula
    const redCrossVGeo = new THREE.PlaneGeometry(0.12, 0.55);
    const redCrossHGeo = new THREE.PlaneGeometry(0.45, 0.12);
    const redMat = new THREE.MeshBasicMaterial({ color: 0xbb1e1e, side: THREE.DoubleSide });
    const redV = new THREE.Mesh(redCrossVGeo, redMat);
    redV.position.set(0.55, 3.0, 0.01);
    const redH = new THREE.Mesh(redCrossHGeo, redMat);
    redH.position.set(0.55, 3.0, 0.01);
    bannerGroup.add(redV, redH);

    lambGroup.add(bannerGroup);

    // 4. Partículas Celestiais Flutuantes (Incenso e Glória)
    const particleCount = 70;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = Math.random() * 5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffd577,
      size: 0.065,
      transparent: true,
      opacity: 0.7
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 5. Interação de Rotação por Mouse/Touch
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      lambGroup.rotation.y += deltaX * 0.008;
      lambGroup.rotation.x = Math.max(-0.3, Math.min(0.5, lambGroup.rotation.x + deltaY * 0.005));
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch handlers
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      lambGroup.rotation.y += deltaX * 0.008;
      lambGroup.rotation.x = Math.max(-0.3, Math.min(0.5, lambGroup.rotation.x + deltaY * 0.005));
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 6. Loop de Renderização e Animação
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotação suave automática quando não estiver arrastando
      if (isAutoRotatingRef.current && !isDragging) {
        lambGroup.rotation.y += 0.004;
      }

      // Respiração mansa e suave do cordeiro
      headGroup.position.y = 1.55 + Math.sin(elapsedTime * 1.5) * 0.03;
      headGroup.rotation.z = Math.sin(elapsedTime * 0.8) * 0.02;

      // Ondulação suave da flâmula da cruz
      flagMesh.rotation.y = Math.sin(elapsedTime * 2.5) * 0.12;

      // Subida graciosa das partículas
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += 0.006;
        if (positions[i] > 5) positions[i] = 0;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Câmera Zoom suave
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 7.5 / zoomLevelRef.current, 0.1);
      camera.lookAt(0, 1.1, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 7. Redimensionamento Responsivo
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      camera.aspect = newWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c120c] via-[#140c08] to-[#0d0705] text-white shadow-2xl border border-amber-700/40 p-6 sm:p-8 transition-all">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Cabeçalho do Calendário */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-800/30 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Agnus Dei • Visualização 3D</span>
              </span>
              <span className="text-xs text-amber-200/80 font-serif capitalize">
                {currentMonthName} de {currentYear}
              </span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-amber-100 flex items-center gap-2">
              <span>Calendário em 3D: O Cordeiro de Deus</span>
            </h2>
            <p className="text-xs text-stone-300 max-w-xl">
              Gire e explore a representação reverente do Cordeiro da Glória e selecione os dias do mês para meditar nas Escrituras da Redenção.
            </p>
          </div>

          {/* Controles de Câmera 3D */}
          <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/10 self-start sm:self-center">
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isAutoRotating
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-stone-300 hover:text-white hover:bg-white/10'
              }`}
              title={isAutoRotating ? 'Pausar rotação contínua' : 'Girar automaticamente em 3D'}
            >
              <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin' : ''}`} />
              <span className="text-[11px] hidden sm:inline">Giro 3D</span>
            </button>

            <button
              onClick={() => setZoomLevel((z) => Math.min(1.5, z + 0.15))}
              className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Aproximar visualização"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <button
              onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.15))}
              className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Afastar visualização"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Canvas 3D do Cordeiro de Deus */}
        <div className="relative rounded-2xl overflow-hidden border border-amber-600/30 shadow-inner bg-black/60 group">
          <div
            ref={mountRef}
            className="w-full h-[360px] cursor-grab active:cursor-grabbing"
            title="Arraste para girar a estátua sagrada do Cordeiro em 3D"
          />

          {/* Dica de Interatividade */}
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] text-amber-200/90 pointer-events-none flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>Toque e arraste para explorar em 360°</span>
          </div>

          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] text-stone-300 pointer-events-none">
            Apocalipse 5:6 • "De pé, um Cordeiro como tendo sido morto"
          </div>
        </div>

        {/* Grade do Calendário Mensal */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-amber-200/80">
            <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              Dias de {currentMonthName}
            </span>
            <span className="text-[11px] text-stone-400">
              Selecione o dia para ler a reflexão messiânica
            </span>
          </div>

          <div className="grid grid-cols-7 sm:grid-cols-10 md:grid-cols-16 gap-1.5">
            {Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1).map((dia) => {
              const isCurrentDayToday = dia === now.getDate();
              const isSelected = dia === selectedDay;
              return (
                <button
                  key={dia}
                  onClick={() => setSelectedDay(dia)}
                  className={`py-2 px-1 rounded-xl text-xs font-semibold transition-all flex flex-col items-center justify-center border ${
                    isSelected
                      ? 'bg-amber-600 border-amber-300 text-white shadow-lg shadow-amber-900/50 scale-105 ring-2 ring-amber-400/40'
                      : isCurrentDayToday
                      ? 'bg-amber-950/70 border-amber-500 text-amber-300 font-bold'
                      : 'bg-black/30 border-white/5 text-stone-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-[13px]">{dia}</span>
                  {isCurrentDayToday && (
                    <span className="text-[8px] uppercase tracking-tighter text-amber-400 font-bold">Hoje</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Card da Meditação do Dia Selecionado */}
        <div className="p-5 sm:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-amber-600/30 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Dia {devocionalDia.dia} de {currentMonthName} • {devocionalDia.simboloCordeiro}
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-amber-100 mt-1">
                {devocionalDia.titulo}
              </h3>
            </div>

            <span className="text-xs text-amber-400 font-bold flex items-center gap-1.5 self-start sm:self-center">
              <BookOpen className="w-4 h-4" />
              {devocionalDia.passagem}
            </span>
          </div>

          <blockquote className="font-serif italic text-base sm:text-lg text-amber-100/95 leading-relaxed bg-amber-950/30 p-4 rounded-xl border border-amber-700/20">
            "{devocionalDia.versiculo}"
          </blockquote>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
            {devocionalDia.meditacao}
          </p>

          <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" /> Oração ao Cordeiro de Deus
            </span>
            <p className="text-xs sm:text-sm text-stone-300 italic">
              "{devocionalDia.oracao}"
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2">
              {onStudyWithGemini && (
                <button
                  onClick={() =>
                    onStudyWithGemini(
                      `Por favor, traga um estudo bíblico cristocêntrico profundo sobre Jesus Cristo como o Cordeiro de Deus (${devocionalDia.passagem}): "${devocionalDia.titulo}". Inclua o significado teológico no Antigo Testamento (tipologia do cordeiro sacrificial) e sua consumação no Novo Testamento e no Apocalipse, sob a ótica wesleyana.`
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-md transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>Estudar tema com Gemini IA</span>
                </button>
              )}

              {onNavigateToBible && (
                <button
                  onClick={onNavigateToBible}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-stone-200 text-xs font-semibold transition-all border border-white/10"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Abrir na Bíblia</span>
                </button>
              )}
            </div>

            <div className="text-[11px] text-stone-400 italic">
              "Eis o Cordeiro de Deus, que tira o pecado do mundo." (João 1:29)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
