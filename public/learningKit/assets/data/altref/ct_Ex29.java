public class ct_Ex29 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            int b = 30;
            int sum = 0;

            for(int i = 10; i <b; i++){
                sum +=i;
            }

            System.out.println(sum);
        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
