import { 
  Example1_BasicCounter, 
  Example2_StringInput,
  Example3_Boolean,
  Example4_Array,
  Example5_Object,
} from './component';
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Tất cả ví dụ useState trong React
        </h1>
        
        <div className="grid gap-6">
          <Example1_BasicCounter />
          <Example2_StringInput />
          <Example3_Boolean />
          <Example4_Array />
          <Example5_Object />
        </div>
      </div>
    </div>
  );
}
