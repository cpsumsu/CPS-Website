export default function useBodyScrollLock(ref) {
  if (!ref.current) return;

  const lock = () => {
    ref.current.style.overflowY = 'hidden';
    console.log(ref.current.style.overflowY);
  };

  const unlock = () => {
    ref.current.style.overflowY = 'auto';
    console.log(ref.current.style.overflowY);
  };

  return [lock, unlock];
}
